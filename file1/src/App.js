import "./App.css";
import Counter from "./components/Counter";
import Tutorial3 from "./components/Tutorial3";
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
            {todos.map((todo) => {
                return <Todo todo={todo} />;
            })}
            <Counter initialCount={0} />
            <Tutorial3 />
        </div>
    );
}

export default App;
