import { useState } from "react";
import type { Task } from "../types";

export const useTasks = () => {
  const [list, setList] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setList((prev) => [...prev, task]);
  };

  const clearCompleted = () => {
    setList(list.filter((task) => !task.status));
  };

  const toggleTask = (value: string) => {
    setList(
      list.map((task: Task) =>
        task.value === value ? { ...task, status: !task.status } : task,
      ),
    );
  };
  const getActiveList = (tab: string) => {
    return list.filter((task) => {
      if (tab === "active") return !task.status;
      if (tab === "completed") return task.status;
      return true;
    });
  };

  const totalCompletedTask = list.filter((task) => task.status).length;

  return {
    totalCompletedTask,
    addTask,
    clearCompleted,
    toggleTask,
    list,
    getActiveList,
  };
};
