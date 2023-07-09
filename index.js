const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 4000

app.use(express.json())
 app.use(require('./route/students.route'))

 mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/Students?retryWrites=true&w=majority")
 .then(() => console.log('Успешно соединились с сервером MongoDB'))
 .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

 app.listen(port,() =>{
    console.log(`Сервер запущен на http://localhost:${port}`);
 })