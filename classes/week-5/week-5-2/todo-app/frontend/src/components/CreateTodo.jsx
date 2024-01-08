import { useState } from 'react'

export let CreateTodo = ({ todoApp}) => {




    const [title, setTitle] = useState();
    const [description, setDescription] = useState();





    return (
        <div>
            <h1>TODO APP</h1>
            <input type="text" name="" id="" placeholder="title" onInput={(e) => {
                setTitle(e.target.value);

            }} /> <br /> <br />

            <input type="text" name="" id="" placeholder="description" onChange={(e) => {
                setDescription(e.target.value);

            }} /> <br /> <br />

            <button onClick={() => {
                fetch('http://localhost:3000/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description
                    })
                }).then(async (res) => {
                    console.log("fetched from CreateTodo");
                    // await alert("todo added!");
                }).catch((err) => {
                    console.log("error from createTodo : " + err);
                    alert("Enter all detains correctly")
                });
                todoApp();
            }}>Add Todo</button><hr />
        </div>
    )
}