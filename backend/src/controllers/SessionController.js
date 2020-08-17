//importando model usuário
const User = require('../models/User')

/**
 * index --> retorna uma listagem de sessões
 * show --> retorna uma unica sessão
 * store --> cria uma sessão
 * update --> altera uma sessão
 * destroy --> deleta uma sessão
 */

module.exports = {
    async store(req, res) {
        const email = req.body.email

        let user = await User.findOne({email: email}) //verifica se já tem um usuário pelo email

        //se não encontrar o usuário, ele cria
        if(!user){
            user = await User.create({email})
        }

        res.json(user)
    }
}