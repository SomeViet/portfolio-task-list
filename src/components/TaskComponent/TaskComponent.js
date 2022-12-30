import "./TaskComponent.scss";
import deleteIcon from "../../assets/icon-delete.svg";

export default function TaskComponent({ task }) {
    return (
        <>
            <li className="task-component">
                <p className="task-component__task">{task}</p>
                <img
                    src={deleteIcon}
                    alt="delete"
                    className="task-component__delete"
                />
            </li>
        </>
    );
}
