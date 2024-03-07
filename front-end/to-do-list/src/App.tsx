import { Tasks } from "./components/Tasks";
import { SideBar } from "./components/SideBar";

function App() {
    console.log("hello");
    return (
        <div className="w-full h-dvh flex bg-stone-950 text-white font-sans font-semibold ">
            <SideBar />
            <Tasks />
        </div>
    );
}

export default App;
