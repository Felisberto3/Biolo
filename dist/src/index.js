"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const Port = process.env.PORT || 3000;
app_1.app.listen(Port, () => console.log('app runnin fine at', Port));
