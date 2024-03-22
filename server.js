"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_server_1 = __importStar(require("./src/index.server"));
const node_fs_1 = require("node:fs");
const app = (0, express_1.default)();
const templateFile = './build/index.html';
const templateHTML = (0, node_fs_1.readFileSync)(templateFile, 'utf-8');
app.use(express_1.default.static('./build', { index: false }));
app.get('/*', (req, res) => {
    const reactApp = (0, index_server_1.default)(req.url);
    const response = templateHTML.replace('{{APP}}', reactApp).replace('{{STYLE}}', index_server_1.sheet.getStyleTags());
    return res.send(response);
});
app.listen(3300, () => {
    console.log(`server is running http://localhost:3300`);
});
