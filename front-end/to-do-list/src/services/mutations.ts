import { useMutation } from "@tanstack/react-query";
import {
    createTask,
    createUser,
    deleteTask,
    deleteUser,
    updateTask,
} from "./api";
import { queryClient } from "./QueryClient";
import { PropTasks } from "../types/tasksTypes";
import { User } from "../types/userTypes";

export const useCreateTask = () => {
    return useMutation({
        mutationFn: (data: PropTasks) => createTask(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["userBytasks"] });
        },
    });
};

export const useCreateUser = () => {
    return useMutation({
        mutationFn: (data: User) => createUser(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["userBytasks"] });
        },
    });
};

export const useUpdateTask = () => {
    return useMutation({
        mutationFn: (data: PropTasks) => {
            const { id, title, description } = data;
            return updateTask({ id, title, description });
        },
        onSettled: async (_, error) => {
            if (error) {
                return console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["userBytasks"] });
            // await queryClient.invalidateQueries({
            //     queryKey: ["task", { id: variable.id }],
            // });
        },
    });
};

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => console.log("User deleted"),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            }

            await queryClient.invalidateQueries({ queryKey: ["userBytasks"] });
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

            await queryClient.invalidateQueries({ queryKey: ["userBytasks"] });
        },
    });
};
