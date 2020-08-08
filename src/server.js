//Servidor
const  express = require('express')
const server = express()

const { pageLanding, 
        pageStudy, 
        pageGiveClasses,
        saveClasses
    } = require('./pages')

//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e config do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//config de arquivos estáticos ( css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

