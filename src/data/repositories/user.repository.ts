import { connect } from './../config/database.config';
import { UserPojo } from "../models/user.model";

export class UserRepository {
    private _db: any = {};
    private _userRepository: any;

    constructor() {
        this._db = connect();
        this._userRepository = this._db.sequelize.getRepository(UserPojo);
    }

    async checkUserExists(email: string, password: string): Promise<UserPojo | undefined> {
        try {
            return await this._userRepository.findOne({ where: { email: email, password: password } });
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    async getUserById(id: string): Promise<UserPojo | undefined> {
        try {
            return await this._userRepository.findByPk(id);
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}