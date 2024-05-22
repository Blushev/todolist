import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as styled from './TaskList.styles';
import { TaskItem } from "../TaskItem/TaskItem";
import { AddEditTask } from "../AddEditTask/AddEditTask";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const fetchTasks = (tasks) => {
  return tasks;
}
export const TaskList = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [search, setSearch] = useState("");
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const { data: taskList = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(tasks),
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTasks = taskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <styled.TaskListContainer>
      <styled.TaskSearch
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={handleSearchChange}
      />
      <styled.AddTaskButton onClick={() => setIsAddEditOpen(true)}>
        Add Task
      </styled.AddTaskButton>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setIsAddEditOpen={setIsAddEditOpen}
          setTaskToEdit={setTaskToEdit}
          setTasks={setTasks}
        />
      ))}
      {isAddEditOpen && (
        <AddEditTask
          setIsAddEditOpen={setIsAddEditOpen}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
          setTasks={setTasks}
        />
      )}
    </styled.TaskListContainer>
  );
};
