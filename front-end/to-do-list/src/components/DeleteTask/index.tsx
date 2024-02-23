import { useEffect, useState } from "react";
import { useDeleteTask } from "../../services/mutations";

export const DeleteTask = ({
    isDelete,
    id,
}: {
    isDelete: boolean;
    id: string;
}) => {
    const { mutate } = useDeleteTask();
    const [taskDelete, setTaskDelete] = useState(false);

    useEffect(() => {
        if (isDelete) {
            setTaskDelete(true);
        }
    }, [isDelete]);

    return (
        <div
            className={`w-4/6 h-max bg-gray-800 absolute right-16 top-44 text-wrap md:max-w-max rounded p-3 ${
                taskDelete ? "block" : "hidden"
            }`}
        >
            <h1>Delete Task</h1>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex gap-3">
                <button
                    className="bg-red-500 p-2 rounded"
                    onClick={() => setTaskDelete((prevState) => !prevState)}
                >
                    Cancel
                </button>
                <button
                    className="bg-green-500 p-2 rounded"
                    onClick={() => {
                        mutate(id);
                        setTaskDelete((prevState) => !prevState);
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
