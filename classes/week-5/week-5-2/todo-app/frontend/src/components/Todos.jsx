export let Todos = ({ todos }) => {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <h3>{todo.title}</h3>
                            <h3>{todo.description}</h3>



                            <button onClick={async () => {
                                await fetch('http://localhost:3000/todos', {
                                    method: 'PUT',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        id: todo._id
                                    })
                                })
                            }}>{todo.completed == true ? "completed!" : "Mark as Complete ?"}</button>
                            <button onClick={async () => {
                                await fetch('http://localhost:3000/todos', {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        id: todo._id
                                    })
                                })
                            }}>X</button>
                     
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}