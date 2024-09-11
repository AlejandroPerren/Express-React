import {Sequelize} from 'sequelize';

const db = new Sequelize('pag_blog', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;