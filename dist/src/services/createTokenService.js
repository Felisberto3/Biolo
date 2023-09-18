"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createTokenService = (userId) => {
    const token = jsonwebtoken_1.default.sign({ userId }, 'key', {
        expiresIn: '10h'
    });
    return token;
};
exports.createTokenService = createTokenService;
