import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" onClick={(event) => {console.log("Testing button"); console.log(event); console.log(event.target)}}>+</button>
    )
}

export { CreateTodoButton };