export const LoadingTasks = () => {
    return (
        <div className="flex justify-center flex-col items-center w-full h-full gap-5">
            <h1 className="text-4xl">Loading tasks...</h1>
            <div className="rounded-full border-solid border-2 border-r-gray-700 border-cyan-400 w-11 h-11 animate-spin"></div>
        </div>
    );
};
