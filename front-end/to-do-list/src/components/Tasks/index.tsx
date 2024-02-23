import { useState } from "react";
import { useIdTask, useTasks } from "../../services/queries";
import { CreateTask } from "../CreateTask";
import { ButtonCreateTask } from "./ButtonCrateTask";
import { DeleteTask } from "../DeleteTask";
import { EditTask } from "../EditTask";
import { PropTasks } from "../../types/tasksTypes";

export const Tasks = () => {
    const tasksIdQuery = useIdTask();
    const tasksQuery = useTasks(tasksIdQuery.data);

    const [isCreate, setCreate] = useState(false);
    const [isDelete, setDelete] = useState({
        id: "",
        isDelete: false,
    });

    const [isEdit, setIsEdit] = useState({
        edit: false,
        dataUpdate: {} as PropTasks,
    });

    if (tasksIdQuery.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full h-12 border-solid border-slate-800 border-b-2  items-center">
                <h1 className="m-auto">Tasks</h1>
                <ButtonCreateTask
                    className="mr-4"
                    onClick={() => setCreate((prev) => !prev)}
                />
            </div>
            <div className="w-full h-dvh py-5 overflow-y-auto flex flex-col items-center gap-5 relative">
                {tasksQuery.map(({ data }) => (
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
                                <button
                                    className="bi bi-pencil text-2xl text-blue-500 w-10 h-10 rounded hover:bg-blue-500 hover:text-white transition duration-300"
                                    onClick={() =>
                                        setIsEdit((prevState) => ({
                                            dataUpdate: data,
                                            edit: !prevState.edit,
                                        }))
                                    }
                                ></button>
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    className="bi bi-trash text-2xl text-red-500 w-10 h-10 rounded hover:bg-red-500 hover:text-white transition duration-300"
                                    onClick={() =>
                                        setDelete((prevState) => {
                                            return {
                                                id: data?._id,
                                                isDelete: !prevState.isDelete,
                                            };
                                        })
                                    }
                                ></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <DeleteTask isDelete={isDelete.isDelete} id={isDelete.id} />
            <CreateTask isCreate={isCreate} />
            <EditTask edit={isEdit.edit} dataUpdate={isEdit.dataUpdate} />
        </div>
    );
};
