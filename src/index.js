const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine
app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log(path.join(__dirname, 'resources/views'))
console.log(path.join(__dirname, 'resources\\views'))

app.get('/', (req, res) => {
  res.render('home')  
})
app.get('/news', (req, res) => {
  res.render('news')  
})
app.get('/search', (req, res) => {
  res.render('search')  
})
app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})