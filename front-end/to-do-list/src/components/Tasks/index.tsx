import { useIdTask, useTasks } from "../../services/queries";

export const Tasks = () => {
    const tasksIdQuery = useIdTask();
    const tasksQuery = useTasks(tasksIdQuery.data);

    if (tasksIdQuery.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="">
            <h1>Tasks</h1>
            {tasksQuery.map(({ data }) => (
                <div key={crypto.randomUUID()}>
                    <h1>{data?.title}</h1>
                    <p>{data?.description}</p>
                </div>
            ))}
        </div>
    );
};
