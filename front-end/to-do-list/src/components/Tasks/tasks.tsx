import { BtnEditTask } from "./BtnEditTask";
import { BtnDeleteTask } from "./BtnDeleteTask";
import { LoadingTasks } from "../LoadingTasks";
import { NoTaskCreated } from "../NoTaskCreated";
import { TaskOption } from "../TaskOption";
import { NoUserCreated } from "../NoUserCreated";
import { useUserByTasks } from "../../services/queries";
import { DeleteTask } from "../DeleteTask";
import { CreateTask } from "../CreateTask";
import { EditTask } from "../EditTask";
import { PropTasks } from "../../types/tasksTypes";
import { useState } from "react";

export const GetTasks = () => {
  const tasksQuery = useUserByTasks();

  const [data, setData] = useState({} as PropTasks);

  return (
    <>
      <div className="w-full h-dvh py-5 overflow-y-auto flex flex-col items-center gap-5 relative">
        {tasksQuery.isLoading ? (
          <LoadingTasks />
        ) : tasksQuery.data[0] === 1 ? (
          <NoUserCreated />
        ) : tasksQuery.data.length === 0 ? (
          <NoTaskCreated />
        ) : (
          tasksQuery.data.map((data: PropTasks) => {
            let updatedTask, createdTask;

            if (data.updated) {
              updatedTask = new Date(data.updated);
            }

            if (data.created) {
              createdTask = new Date(data.created);
            }

            return (
              <div
                key={crypto.randomUUID()}
                className="flex flex-col border-solid  shadow-xl gap-2 shadow-black/50 rounded p-4 w-10/12 md:max-w-3xl bg-zinc-900 hover:scale-105 transition duration-300"
              >
                <div className="flex justify-between">
                  <h1 className="text-xl text-gray-400 flex-grow">
                    {data?.title}
                  </h1>
                  <div>
                    <p className="text-sm font-normal text-green-500">
                      created: {createdTask?.toLocaleString()}
                    </p>
                    <p className="text-sm font-normal text-blue-500">
                      updated:{"  "}
                      {updatedTask?.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-normal text-gray-700">
                    Description:
                  </h2>
                  <p className=" font-normal">{data?.description}</p>
                </div>
                <div className="flex justify-between">
                  <TaskOption data={data} />
                  <div className="flex gap-6 items-center justify-end">
                    <div className="flex items-center justify-center">
                      <BtnEditTask onclick={() => setData(data)} />
                    </div>
                    <div className="flex items-center justify-center">
                      <BtnDeleteTask onclick={() => setData(data)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <DeleteTask data={data} />
      <CreateTask />
      <EditTask data={data} />
    </>
  );
};
