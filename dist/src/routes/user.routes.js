"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const createUser_1 = require("src/modules/user/userCases/createUser");
const router = (0, express_1.Router)();
exports.userRouter = router;
router.post('/signin', (req, res, next) => {
    return createUser_1.createUserController.handle(req, res);
});
