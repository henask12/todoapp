import "./App.css";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 custom">
                <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center mb-3">
                    To Do List
                </h1>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
