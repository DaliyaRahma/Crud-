const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors({
  origin: [""],
  methods: ["POST", "GET", "PUT", "DELETE" ],
  credentials: true
}));

mongoose.connect('mongodb+srv://crud:crud1234@cluster0.fa5yt.mongodb.net/users');

app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.post('/createUser', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});


app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, { name: req.body.name, age: req.body.age, email: req.body.email }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('Server is running');
});
