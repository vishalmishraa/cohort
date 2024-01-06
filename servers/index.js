const
    express = require("express"),
    cors = require('cors'),
    app = express();

// Enable All CORS Requests
app.use(cors());

//todos
let num = 1;
const todos = [];

app.get('/todos', (req, res) => {
    let randomText = generateRandomText();
    let oneText = generateOneRandomText();
    const todo = {
        title: `${num}. ${oneText}`,
        description: randomText,
        id: `${ num }`
    };
    num++;
    todos.push(todo);
    res.send(todos); // Send todos as an array

});

app.get('/',(req,res)=>{
    todos.pop(todos[2]);
    res.send(todos[1]);
});


const generateRandomText = () => {
    const words = ["Believe", "Achieve", "Dreams", "Success", "Inevitable"];
    let randomText = "";
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomText += words[randomIndex] + " ";
    }
    return randomText.trim();
};
const generateOneRandomText = () => {
    const words = ["Believe", "Achieve", "Dreams", "Success", "Inevitable"];
    let randomText = "";

    const randomIndex = Math.floor(Math.random() * words.length);
    randomText += words[randomIndex] + " ";

    return randomText.trim();
};

//***************************************************************** */

app.listen(3000, () => {
    console.log("http://localhost:3000/todos");
})