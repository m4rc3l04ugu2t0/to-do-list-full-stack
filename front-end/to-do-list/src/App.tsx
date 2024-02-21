import { Tasks } from "./components/Tasks";
import { SideBar } from "./components/SideBar";

function App() {
    return (
        <div className="w-full h-dvh flex bg-zinc-900 text-white">
            <SideBar />
            <Tasks />
        </div>
    );
}

export default App;
