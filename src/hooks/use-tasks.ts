import useLocalStorage from "use-local-storage";

import { type Task, TASKS_KEY, TaskState } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState<boolean>(true);


  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }
    
    setTasks(tasksData);
  }

  useEffect(() => { fetchTasks() }, [tasksData]);

  return {
    isLoadingTasks,
    tasks,
    createdTasksCount: tasks.filter(task => task.state === TaskState.CREATED).length,
    concludedTasksCount: tasks.filter(task => task.concluded).length,
  };
}

export default useTasks;