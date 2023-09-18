"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const UserRepository_1 = require("../../repository/UserRepository");
const createUserCase_1 = require("./createUserCase");
const createUserController_1 = require("./createUserController");
const usuarioRepository = new UserRepository_1.UsuarioRepository();
const createUserCase = new createUserCase_1.CreateUserCase(usuarioRepository);
const createUserController = new createUserController_1.CreateUserController(createUserCase);
exports.createUserController = createUserController;