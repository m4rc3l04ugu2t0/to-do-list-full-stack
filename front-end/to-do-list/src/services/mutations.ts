import { useMutation } from "@tanstack/react-query";
import { createTask, deleteTask, updateTask } from "./api";
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

export const useUpdateTask = () => {
    return useMutation({
        mutationFn: (data: PropTasks) => updateTask(data),
        onSettled: async (_, error, variable) => {
            if (error) {
                return console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["tasksId"] });
            await queryClient.invalidateQueries({
                queryKey: ["task", { id: variable._id }],
            });
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
