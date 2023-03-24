import { UserService } from "../services/user.service";

const userService: UserService = new UserService();

export const userController = {
    checkUserExists: (req: any, res: any) => {
        try {
            userService.checkUserExists(req.params.email, req.params.password)
                .then(result => res.json(result));
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    getUserById: (req: any, res: any) => {
        try {
            userService.getUserById(req.params.id)
                .then(result => res.json(result));
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }
}