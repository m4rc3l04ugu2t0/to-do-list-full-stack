export const DeleteTask = ({ isDelete }: { isDelete: boolean }) => {
    return (
        <div
            className={`w-4/6 h-max bg-gray-800 absolute right-16 top-44 text-wrap md:max-w-max rounded p-3 ${
                isDelete ? "block" : "hidden"
            }`}
        >
            <h1>Delete Task</h1>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex gap-3">
                <button className="bg-red-500 p-2 rounded">Cancel</button>
                <button className="bg-green-500 p-2 rounded">Save</button>
            </div>
        </div>
    );
};
