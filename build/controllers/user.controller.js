"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
exports.userController = {
    getUserById: (req, res) => {
        try {
            userService.getUserById(req.params.id)
                .then(result => {
                res.json(result);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }
};
