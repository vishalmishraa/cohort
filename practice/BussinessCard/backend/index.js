require('dotenv').config();
const
    express = require('express'),
    { card } = require('./db'),
    path = require('path'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    { createCard, updateCard } = require('./type'),

    app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.get('/cards', async (req, res) => {
    const cards = await card.find();
    res.json({
        cards
    })
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.post('/cards', async (req, res) => {
    const
        createPayload = req.body,
        parsePayload = createCard.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    //post it on mongoDB
    await card.create({
        name: createPayload.name,
        description: createPayload.description,
        email: createPayload.email,
        linkedinID: `https://www.linkedin.com/in/${createPayload.linkedinID}`,
        twitterID: `https://www.twitter.com/${createPayload.twitterID}`,
        interests: createPayload.interests
    });

    res.json({
        msg: "card created"
    })

});


app.put('/cards',async (req,res)=>{
    const
        updatePayload = req.body,
        parsePayload = updateCard.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    const {id} = req.params;

    try {
        const updatedCard = await card.findByIdAndUpdate(id,{
            name: updatePayload.name,
            description: updatePayload.description,
            email: updatePayload.email,
            linkedinID: `https://www.linkedin.com/in/${updatePayload.linkedinID}`,
            twitterID: `https://www.twitter.com/${updatePayload.twitterID}`,
            interests: updatePayload.interests
        },{new:true});

        if(!updatedCard){
            res.status(404).json({
                msg: "Card not found"
            });
            return;
        }

        res.json({
            msg: "Card updated",
            card: updatedCard
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Failed to update card"
        });
    }
})


app.delete('/cards', async (req, res) => {
    const { id } = req.body;

    try {
        const deletedCard = await card.findByIdAndDelete(id);
        if (!deletedCard) {
            res.status(404).json({
                msg: "Card not found"
            });
            return;
        }
        res.json({
            msg: "Card deleted",
            card: deletedCard
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Failed to delete card"
        });
    }
});



app.listen(3000, () => {
    console.log("https://localhost:3000");
})