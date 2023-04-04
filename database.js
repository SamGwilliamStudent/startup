const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const habitCollection = client.db('startup').collection('habits');

function clearUserCollection(){
    userCollection.deleteMany({});
}

function clearHabitCollection(){
    habitCollection.deleteMany({});
}

function setUser(username) {
    userCollection.insertOne(username);
}

function getUser() {
    const user = userCollection.find({user: {$exists: true}});
    return user;
}

function setHabit(habit) {
    habitCollection.insertOne(habit);
}

function getHabit() {
    const habit = habitCollection.find({habit: {$exists: true}});
    return habit;
}

module.exports = {setUser, getHabit, setHabit, getUser, clearUserCollection, clearHabitCollection}