import { useState } from "react";

export const SideBar = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    return (
        <div
            data-isopen={toggleSideBar}
            className="w-2/6 max-w-80 h-dvh bg-zinc-800 flex flex-col justify-between p-2 data-[isopen=true]:w-auto"
        >
            <div className="self-end">
                <button
                    onClick={() => setToggleSideBar((prevState) => !prevState)}
                    className="bi bi-layout-sidebar text-3xl"
                ></button>
            </div>
            <ul>
                <li className="bi bi-gear text-3xl"></li>
            </ul>
        </div>
    );
};
