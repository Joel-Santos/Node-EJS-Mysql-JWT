const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))
const authenticateToken = require('../controllers/auth');
const secret = process.env.JWT_SECRET



//Nessa rota iremos abrir o fomulario de login
router.get('/login', userController.formLogin)

//Nessa rota iremos validar o fomulario de login
router.post('/verificarLogin', userController.verificarLogin)

router.get('/teste', authenticateToken,(req, res) =>{
    const token = req.header('Authorization');

    res.json({msg: "Olá sou um json!", aluno: "Joel"})
    
})


module.exports = router