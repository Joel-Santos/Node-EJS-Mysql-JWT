const path = require('path')
const knex = require('knex');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');
const knexConfig = require('../../knexfile')
const db = knex(knexConfig);
require('dotenv').config();
const authConfig = require('../authConfig')

class userController {
    formLogin (req, res){
        res.sendFile(path.join(__dirname, '../views/login.html'))
    }

    async verificarLogin (req,res){
        const {email, password} = req.body
        console.log(email, password)
            
        // Consultar o banco de dados para encontrar o usuário
        const user = await db('user').where({email}).first();

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado.' });
        }

        // Verificar a senha usando bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Senha incorreta.' });
        }else{
           console.log(user) 
        }

        // Gerar um token JWT
        /*const token = jwt.sign({userId: user.id }, secret,{expiresIn: '1h' })
        res.*/

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })
        res.json({user, token})

    }


        
}

module.exports = new userController()