import { useQuery } from "@tanstack/react-query";
import { getIdUser, getUserByTasks } from "./api";

export const useIdUser = () => {
    return useQuery({
        queryKey: ["userId"],
        queryFn: getIdUser,
    });
};

// export const useUserByTasks = (ids: string[] | undefined) => {
//     return useQueries({
//         queries: (ids ?? []).map((id) => {
//             return {
//                 queryKey: ["task", { id }],
//                 queryFn: () => getUserByTasks(id!),
//             };
//         }),
//     });
// };

export const useUserByTasks = (id: string | undefined) => {
    return useQuery({
        queryKey: ["userBytasks"],
        queryFn: () => getUserByTasks(id),
    });
};
