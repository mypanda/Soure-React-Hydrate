"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { renderToString } from 'react-dom/server'
const index_server_1 = __importDefault(require("./src/index.server"));
const node_fs_1 = require("node:fs");
const app = (0, express_1.default)();
const templateFile = './build/index.html';
const templateHTML = (0, node_fs_1.readFileSync)(templateFile, 'utf-8');
app.use(express_1.default.static('./build', { index: false }));
app.get('/*', (req, res) => {
    // const reactApp = renderToString(<h1>Hello from the Server</h1>)
    const reactApp = (0, index_server_1.default)(req.url);
    const response = templateHTML.replace('{{APP}}', reactApp);
    return res.send(response);
    return res.send(`<html>
      <body>
        <div id="root"> ${reactApp}</div>
      </body>
    </html>
    `);
});
app.listen(3000, () => {
    console.log('server is running');
});
