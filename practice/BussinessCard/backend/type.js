const
    zod = require('zod');

const createCard = zod.object({
    name: zod.string(),
    description: zod.string(),
    email: zod.string(),
    linkedinID: zod.string(),
    twitterID: zod.string(),
    interests: zod.array(zod.string())

});
const updateCard = zod.object({
    id: zod.string()
});

module.exports = { createCard, updateCard };