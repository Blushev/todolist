import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as styled from './AddEditTask.styles';

export const AddEditTask = ({ setIsAddEditOpen, taskToEdit, setTaskToEdit, setTasks }) => {
  const [title, setTitle] = useState('');

  const queryClient = useQueryClient();

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const addTaskMutation = useMutation({
    mutationFn: (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      return newTask;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    }
  });

  const editTaskMutation = useMutation({
    mutationFn: (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
      return updatedTask;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    }
  });

  const handleSave = () => {
    if (taskToEdit) {
      editTaskMutation.mutate({ ...taskToEdit, title });
    } else {
      const newTask = { id: Date.now(), title };
      addTaskMutation.mutate(newTask);
    }
    setTitle('');
    setIsAddEditOpen(false);
    setTaskToEdit(null);
  };

  return (
    <styled.Modal>
      <styled.ModalTitle>{taskToEdit ? 'Edit Task' : 'Add Task'}</styled.ModalTitle>
      <styled.ModalInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <styled.ModalButton onClick={handleSave}>
        {taskToEdit ? 'Save Changes' : 'Add Task'}
      </styled.ModalButton>
      <styled.ModalButton onClick={() => setIsAddEditOpen(false)}>
        Cancel
      </styled.ModalButton>
    </styled.Modal>
  );
};