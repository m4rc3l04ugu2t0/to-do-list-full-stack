import { useQueries, useQuery } from "@tanstack/react-query";
import { getIdTasks, getTasks } from "./api";

export const useIdTask = () => {
    return useQuery({
        queryKey: ["postsId"],
        queryFn: getIdTasks,
    });
};

export const useTasks = (ids: string[] | undefined) => {
    return useQueries({
        queries: (ids ?? []).map((id) => {
            return {
                queryKey: ["task", { id }],
                queryFn: () => getTasks(id!),
            };
        }),
    });
};
