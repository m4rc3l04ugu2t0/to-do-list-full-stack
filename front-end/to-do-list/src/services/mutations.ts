import { useMutation } from "@tanstack/react-query";
import { createTask, deleteTask } from "./api";
import { queryClient } from "./QueryClient";
import { PropTasks } from "../types/tasksTypes";

export const useCreateTask = () => {
    return useMutation({
        mutationFn: (data: PropTasks) => createTask(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["tasksId"] });
        },
    });
};

export const useDeleteTask = () => {
    return useMutation({
        mutationFn: (id: string) => deleteTask(id),
        onSuccess: () => console.log("Task deleted"),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["tasksId"] });
        },
    });
};
