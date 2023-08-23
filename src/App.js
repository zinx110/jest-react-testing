import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/todo";

function App() {
    const todos = [
        {
            id: 1,
            title: "wash dishes",
            completed: false,
        },
        {
            id: 2,
            title: "make dinner",
            completed: true,
        },
    ];
    return (
        <div className="App">
            {/* {todos.map((todo) => {
                return <Todo todo={todo} />;
            })}
            <Counter initialCount={0} /> */}
        </div>
    );
}

export default App;
