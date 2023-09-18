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
exports.CreateUserCase = void 0;
const bcrypt_1 = require("bcrypt");
const createTokenService_1 = require("src/services/createTokenService");
class CreateUserCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ first_name, last_name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExist = yield this.userRepository.findByEmail(email);
            if (userExist.email)
                throw new Error("Usuario ja existe");
            const password_hash = yield (0, bcrypt_1.hash)(password, 8);
            const user = yield this.userRepository.create({
                first_name,
                last_name,
                email,
                password_hash
            });
            const token = (0, createTokenService_1.createTokenService)(user.id);
            return {
                token,
                first_name,
                last_name,
                email,
                password_hash
            };
        });
    }
}
exports.CreateUserCase = CreateUserCase;
