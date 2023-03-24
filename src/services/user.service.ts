import { UserDto } from "../types";
import { UserRepository } from "../data/repositories/user.repository";
import { UserPojo } from "../data/models/user.model";

export class UserService {
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    async checkUserExists(email: string, password: string): Promise<UserDto | undefined> {
        return await this._userRepository.checkUserExists(email, password)
            .then(userAsPojo => {
                if (!userAsPojo) {
                    return undefined;
                }

                return this.parsePojoIntoDto(userAsPojo);
            })
            .catch(error => {
                console.error(error);
                throw error;
            })
    }

    async getUserById(id: string): Promise<UserDto | undefined> {
        return await this._userRepository.getUserById(id)
            .then(userAsPojo => {
                if (!userAsPojo) {
                    return undefined;
                }

                return this.parsePojoIntoDto(userAsPojo);
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    parsePojoIntoDto(userPojo: UserPojo): UserDto {
        const userDto: UserDto = {
            user_id: userPojo.dataValues.user_id,
            username: userPojo.dataValues.username,
            password: userPojo.dataValues.password,
            email: userPojo.dataValues.email,
            fullname: userPojo.dataValues.fullname,
            birthdate: userPojo.dataValues.birthdate,
            deposit: userPojo.dataValues.deposit,
        }

        return userDto;
    }
}