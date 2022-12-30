import React from "react";
import "./stylings/App.scss";
import { TaskComponent, ThemeButton } from "./components";

class App extends React.Component {
    state = {
        todoTasks: [],
        theme: "white",
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

    removeTask = (event, index) => {
        event.preventDefault();
        this.state.todoTasks.splice(index, 1);
        this.setState(this.state.todoTasks);
        localStorage.setItem("todoTasks", JSON.stringify(this.state.todoTasks));
    };

    whiteThemeToggle = (_event) => {
        const currentTheme =
            this.state.theme !== "white" ? "white" : this.state.theme;
        this.setState({
            theme: currentTheme,
        });
        localStorage.setItem("theme", currentTheme);
    };

    blackThemeToggle = (_event) => {
        const currentTheme =
            this.state.theme !== "black" ? "black" : this.state.theme;
        this.setState({
            theme: currentTheme,
        });
        localStorage.setItem("theme", currentTheme);
    };

    blueThemeToggle = (_event) => {
        const currentTheme =
            this.state.theme !== "blue" ? "blue" : this.state.theme;
        this.setState({
            theme: currentTheme,
        });
        localStorage.setItem("theme", currentTheme);
    };

    render() {
        const appTheme = this.state.theme;

        return (
            <main
                className={
                    appTheme === "white"
                        ? "app"
                        : appTheme === "black"
                        ? "app--black"
                        : appTheme === "blue"
                        ? "app--blue"
                        : null
                }
            >
                <h1 className="app__header">Basic To Do List</h1>
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
                        <TaskComponent
                            key={index}
                            task={task}
                            index={index}
                            removeTask={this.removeTask}
                            taskTheme={appTheme}
                        />
                    ))}
                </ul>
                <ThemeButton
                    buttonTheme={appTheme}
                    whiteTheme={this.whiteThemeToggle}
                    blackTheme={this.blackThemeToggle}
                    blueTheme={this.blueThemeToggle}
                />
            </main>
        );
    }
}

export default App;
