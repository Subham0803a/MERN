function Task({ task, onDelete, onToggle }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <button style={{ color: 'black', backgroundColor: 'lightblue'}} onClick={() => onDelete(task.id)}>X</button></h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;
