import { ButtonCreateTask } from "../Tasks/ButtonCrateTask";

export const NoTaskCreated = () => {
    return (
        <div className="flex justify-center flex-col items-center w-full h-full">
            <h1 className="text-4xl">No task created :(</h1>
            <div className="flex items-center text-3xl gap-4">
                <ButtonCreateTask />
                Create task
            </div>
        </div>
    );
};
