import { Tasks } from "./components/Tasks";
import { SideBar } from "./components/sideBar";

function App() {
    return (
        <div className="w-full h-dvh flex bg-zinc-900">
            <SideBar />
            <Tasks />
        </div>
    );
}

export default App;
