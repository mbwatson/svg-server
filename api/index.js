const express = require('express')
const app = express()
const PORT = process.env.API_PORT || 3030

// Custom Middleware - Route-Logging
const routeLogger = (req, res, next) => {
    console.log(`HIT: ${ req.path }`)
    next()
}
app.use(routeLogger)

app.listen(PORT, () => {
    console.log(`API listening on port ${ PORT }.`)
})

app.use('/test', (req, res) => { res.send('OK!') })
app.use('/bar', require('./routes/bar'))
