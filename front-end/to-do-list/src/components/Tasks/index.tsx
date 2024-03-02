import { useState } from "react";
import { useIdTask, useTasks } from "../../services/queries";
import { CreateTask } from "../CreateTask";
import { ButtonCreateTask } from "./ButtonCrateTask";
import { DeleteTask } from "../DeleteTask";
import { EditTask } from "../EditTask";
import { ClicksProvider } from "../../contexts/contextClicks";
import { BtnEditTask } from "./BtnEditTask";
import { PropTasks } from "../../types/tasksTypes";
import { BtnDeleteTask } from "./BtnDeleteTask";
import { LoadingTasks } from "../LoadingTasks";
import { NoTaskCreated } from "../NoTaskCreated";

export const Tasks = () => {
    const tasksIdQuery = useIdTask();
    const tasksQuery = useTasks(tasksIdQuery.data);

    const [data, setData] = useState({} as PropTasks);

    return (
        <ClicksProvider>
            <div className="flex flex-col w-full">
                <div className="flex w-full h-12 border-solid border-slate-800 border-b-2  items-center">
                    <h1 className="m-auto">Tasks</h1>
                    <ButtonCreateTask className="mr-4" />
                </div>
                <div className="w-full h-dvh py-5 overflow-y-auto flex flex-col items-center gap-5 relative">
                    {tasksIdQuery.isLoading ? (
                        <LoadingTasks />
                    ) : tasksQuery.length === 0 ? (
                        <NoTaskCreated />
                    ) : (
                        tasksQuery.map(({ data }) => (
                            <div
                                key={crypto.randomUUID()}
                                className="border-solid border-white border-2 rounded p-4 w-10/12 md:max-w-3xl"
                            >
                                <div className="flex justify-between">
                                    <h1 className="text-xl">{data?.title}</h1>
                                    <p>Feb 21 18:21</p>
                                </div>

                                <p className="text-lg">{data?.description}</p>
                                <div className="flex gap-6 items-center justify-end">
                                    <div className="flex items-center justify-center">
                                        <BtnEditTask
                                            onclick={() => setData(data)}
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <BtnDeleteTask
                                            onclick={() => setData(data)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <DeleteTask data={data} />
                <CreateTask />
                <EditTask data={data} />
            </div>
        </ClicksProvider>
    );
};
