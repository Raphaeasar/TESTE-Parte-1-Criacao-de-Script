const api = require('./api');
const express = require('express');

const server = express();

server.use(express.json());

server.listen(8081);

server.get('/', (req, res) => {
    return res.send({ message: "OK" });
});

server.get('/uruguay/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await api.get(`uruguay/${id}`);
        return res.send({ name: data.name });
    } catch (error) {
        res.send({ error: error.message});
    }
});