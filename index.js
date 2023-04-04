const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


//Make GetHabit Submit Habit API make submit username api


apiRouter.post('/habit', async (req, res) => {
    DB.clearHabitCollection();
    DB.setHabit(req.body);
    const habit = await DB.getHabit();
    res.send(habit);
});

apiRouter.get('/habit', async (req, res) => {
    const habit = await DB.getHabit();
    res.send(habit);
});

apiRouter.post('/user', async (req, res) => {
    DB.clearUserCollection();
    DB.setUser(req.body);
    const user = await DB.getUser();
    res.send(user);
});

apiRouter.get('/user', async (req, res) => {
    const user = await DB.getUser();
    res.send(user);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
