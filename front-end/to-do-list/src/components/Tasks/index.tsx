import { useIdTask, useTasks } from "../../services/queries";
import { ButtonCrateTask } from "./ButtonCrateTask";

export const Tasks = () => {
    const tasksIdQuery = useIdTask();
    const tasksQuery = useTasks(tasksIdQuery.data);

    if (tasksIdQuery.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full h-12 border-solid border-slate-800 border-b-2  items-center">
                <h1 className="m-auto">Tasks</h1>
                <ButtonCrateTask className="mr-4" />
            </div>
            <div className="w-full h-dvh py-5 overflow-y-auto flex flex-col items-center gap-5">
                {tasksQuery.map(({ data }) => (
                    <div
                        key={crypto.randomUUID()}
                        className="border-solid border-white border-2 rounded p-4 w-10/12 md:max-w-3xl"
                    >
                        <h1>{data?.title}</h1>
                        <p>{data?.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
