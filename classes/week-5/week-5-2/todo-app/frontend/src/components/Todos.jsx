export let Todos = ({ todos, key, todoApp }) => {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo._id}>
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
                                }).then(async (res) => {
                                    console.log("fetched from PUT");
                                });
                                todoApp();
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
                                }).then(async (res) => {
                                    console.log("fetched from X");

                                });
                                todoApp();
                            }}>X</button>

                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}