require('dotenv').config();
const
    express = require('express'),
    { todo } = require('./db'),
    path = require('path'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    { createTodo, updateTodo } = require('./type'),

    app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.post('/todos', async (req, res) => {
    const
        createPayload = req.body,
        parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    //post it on mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "todos created"
    })

});

app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos
    })
});

app.put('/todos', async (req, res) => {
    const
        updatePayload = req.body,
        parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    await todo.findByIdAndUpdate({
        _id: updatePayload.id
    }, {
        completed: true
    }, { new: true });
    res.json({
        msg: "Mark as completed"
    })
})





app.delete('/todos', async (req, res) => {
    const { id } = req.body;

    try {
        const deletedTodo = await todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            res.status(404).json({
                msg: "Todo not found"
            });
            return;
        }
        res.json({
            msg: "Todo deleted",
            todo: deletedTodo
        });
    } catch (error) {
        res.status(500).json({
            msg: "Failed to delete todo"
        });
    }
});







app.listen(3000, () => {
    console.log("https://localhost:3000");
})