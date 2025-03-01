// .env
// все для монго - хост и т д

// credsModel.js
/* const mongoose = require('mongoose'); // https://mongoosejs.com/docs/index.html
const schema = mongoose.schema({
  login: String,
  password: String,
}, { timestamps: true });
module.exports = mongoose.model('Creds', schema); */

// index.js
/* const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const env = require('env-var');
const Creds = require('./credsModel'); */

// const MONGO_HOST /*например*/ = env.get(/*Все из .env файла*/).required().asString(); // https://www.npmjs.com/package/env-var

/* const app = express();
app.use(express.json());

app.post('/save', async (req, res) => {
  console.log(req.body);
  const { login, password } = req.body;
  await Creds.create({ login, password });
  res.status(200).end();
});

async function init() {
  await mongoose.connect(MONGO_HOST);
  app.listen(4000); // порт на твой выбор
}

init().catch(err => {
  console.error(err);
  process.exit(1);
}) */



/* Мой говнокод */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv');
const moment = require("moment");

const app = express();
dotenv.config()

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL


mongoose.connect(MONGOURL).then(() => {
  console.log("Database is connected successufully")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}).catch((error) => console.log(error))

const schema = new mongoose.Schema({
  login: String,
  password: String,
  resource: String,
  time: { type: String, required: true }
});

const UserModel = mongoose.model('users', schema);
app.use(cors())

app.get("/getUsers", async(req, res)=> {
  const userData = await UserModel.find()
  res.json(userData)
})

app.use(express.json())

app.post("/addUser", async (req, res) => {
  try {
    const { login, password, resource } = req.body;

    const formattedTime = new Date().toLocaleString("ru-RU");
    
    const newUser = new UserModel({ 
      login, 
      password,
      time: formattedTime,
      resource
    });
    await newUser.save();

    res.status(201).json({ message: "Пользователь добавлен", user: newUser });
  } catch (error) {
    console.error("Ошибка при добавлении пользователя:", error)
    res.status(500).json({ error: "Ошибка сервера", details: error.message });
  }
})

app.get("/getRecentUsers", async (req, res) => {
  try {
    const last24Hours = moment().subtract(24, "hours").format("DD.MM.YYYY, HH:mm:ss");

    const recentUsers = await UserModel.find({
      time: { $gte: last24Hours }
    });

    res.json(recentUsers);
  } catch (error) {
    console.error("Ошибка при загрузке недавних пользователей:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});
