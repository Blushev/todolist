import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "../Alert/Alert";
import * as styled from "./TaskItem.styles";

export const TaskItem = ({
  task,
  setIsAddEditOpen,
  setTaskToEdit,
  setTasks,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation({
    mutationFn: (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      return taskId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const handleEdit = () => {
    setTaskToEdit(task);
    setIsAddEditOpen(true);
  };

  const handleDelete = () => {
    setIsAlertOpen(true);
  };

  const confirmDelete = () => {
    deleteTaskMutation.mutate(task.id);
    setIsAlertOpen(false);
  };

  return (
    <styled.TaskItemContainer>
      <styled.TaskTitle>{task.title}</styled.TaskTitle>
      <styled.TaskActions>
        <styled.TaskButton onClick={handleEdit}>Edit</styled.TaskButton>
        <styled.TaskButton onClick={handleDelete}>Delete</styled.TaskButton>
      </styled.TaskActions>
      {isAlertOpen && (
        <Alert
          message="Are you sure you want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={() => setIsAlertOpen(false)}
        />
      )}
    </styled.TaskItemContainer>
  );
};
