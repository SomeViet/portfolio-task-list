import "./TaskComponent.scss";
import deleteIcon from "../../assets/icon-delete.svg";
import deleteIconWhite from "../../assets/icon-delete-white.svg";
import { useEffect } from "react";

export default function TaskComponent({ task, index, removeTask, taskTheme }) {
    // Learning function hooks
    //

    useEffect(() => {
        let idName = "deleteImage" + index;
        let deleteImage = document.getElementById(idName);
        deleteImage.addEventListener("click", (event) => {
            removeTask(event, index);
        });

        return () => {
            deleteImage.removeEventListener("click", (event) => {
                removeTask(event, index);
            });
        };
    }, [index, removeTask]);

    return (
        <>
            <li
                className={
                    taskTheme === "white"
                        ? "task-component"
                        : taskTheme === "black"
                        ? "task-component--black"
                        : null
                }
            >
                <p className="task-component__task">{task}</p>
                <img
                    src={
                        taskTheme === "white"
                            ? deleteIcon
                            : taskTheme === "black"
                            ? deleteIconWhite
                            : null
                    }
                    alt="delete"
                    className="task-component__delete"
                    id={"deleteImage" + index}
                />
            </li>
        </>
    );
}
