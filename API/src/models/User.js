import { Model, Sequelize } from 'sequelize';
import { password } from '../config/database';

class User extends Model{
    static init(sequelize){
        super.init(
            {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            cpf: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            permission:Sequelize.BOOLEAN
            },
            {
                sequelize,
            },
        );
    }
}

export default User;
