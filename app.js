const express = require('express')
const path = require('path')
const morgan = require('morgan')



//Se crea la App
const app = express()


//Config
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(morgan('dev'))



//Rutas
const stringRoutes = require('./routes/stringRoutes')

app.use('/string',stringRoutes)



//Servidor
app.set('port', process.env.PORT || 3000)
const server = app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}...`)
})//end