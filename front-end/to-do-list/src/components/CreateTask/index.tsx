export const CreateTask = ({ isCreate: isEditing }: { isCreate: boolean }) => {
    return (
        <div
            className={`flex flex-col gap-3 w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                isEditing ? "block" : "hidden"
            }`}
        >
            <input
                type="text"
                placeholder="Task Name"
                className="w-full p-2 bg-gray-700 rounded outline-none"
            />
            <textarea
                placeholder="Task Description"
                className="w-full p-2 bg-gray-700 rounded outline-none"
            />

            <div className="flex gap-3">
                <button className="bg-red-500 p-2 rounded">Cancel</button>
                <button className="bg-green-500 p-2 rounded">Save</button>
            </div>
        </div>
    );
};
