import { FaTimes } from "react-icons/fa";

export const TaskItem = ({ task, onDelete }) => {
    return ( <
        div className = { "task" } >
        <
        h3 > { task.text } <
        FaTimes style = {
            { color: "red", cursor: "pointer" } }
        onClick = {
            () => onDelete(task.id) }
        /> <
        /h3> <
        p > { task.day } < /p> <
        /div>
    );
};