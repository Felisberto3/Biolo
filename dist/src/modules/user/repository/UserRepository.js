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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class UsuarioRepository {
    create({ first_name, last_name, email, password_hash }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.usuario.create({ data: { first_name, last_name, email, password_hash } });
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield prisma_1.default.usuario.findFirst({ where: { id } });
            return usuario;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield prisma_1.default.usuario.findUnique({ where: { email } });
            return usuario;
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
