"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const createUserSchema_1 = require("src/shema/createUserSchema");
class CreateUserController {
    constructor(createUserCase) {
        this.createUserCase = createUserCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_name, last_name, email, password } = req.body;
            if (!(yield createUserSchema_1.createUserShema.isValid({
                first_name,
                last_name,
                email,
                password
            }))) {
                throw new Error('Dados invalidos!');
            }
            const Usuario = this.createUserCase.execute({ first_name, last_name, email, password });
            return res.status(201).json(Usuario);
        });
    }
}
exports.CreateUserController = CreateUserController;
