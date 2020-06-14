const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db.js')()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use("/api/",router)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})