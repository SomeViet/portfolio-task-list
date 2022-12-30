import React from "react";
import "./stylings/App.scss";
import { TaskComponent } from "./components";

class App extends React.Component {
    state = {
        todoTasks: [],
        theme: "light",
    };

    componentDidMount() {
        // load Tasks from local storage
        if (localStorage.getItem("todoTasks")) {
            this.setState({
                todoTasks: JSON.parse(localStorage.getItem("todoTasks")),
            });
        }

        // load theme
        if (localStorage.getItem("theme")) {
            this.setState({ theme: localStorage.getItem("theme") });
        }
    }

    addTask = (event) => {
        // prevent default
        event.preventDefault();
        // edit state with updated list
        const task = event.target.addTask.value;
        if (!task) {
            return;
        }

        const currentState = [...this.state.todoTasks, task];
        this.setState({ todoTasks: currentState });

        // update local storage
        localStorage.setItem("todoTasks", JSON.stringify(currentState));

        const addForm = document.getElementById("addTaskForm");
        addForm.reset();
    };

    removeTask = () => {};

    render() {
        return (
            <main className="app">
                <h1 className="app__header">Basic To Do List</h1>
                {/* <div>Theme</div> */}

                <form
                    onSubmit={this.addTask}
                    id="addTaskForm"
                    className="app__form"
                >
                    <input
                        type="text"
                        placeholder="Input a task"
                        name="addTask"
                        className="app__input"
                    />
                    <button type="submit" className="app__add-button">
                        Add Task
                    </button>
                </form>
                <ul className="app__list">
                    {this.state.todoTasks.map((task, index) => (
                        <TaskComponent key={index} task={task} />
                    ))}
                </ul>
            </main>
        );
    }
}

export default App;
