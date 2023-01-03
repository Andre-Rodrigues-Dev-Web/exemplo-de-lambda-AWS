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
exports.handler = void 0;
const fs = require("fs");
//Cria uma função assíncrona que gera um arquivo html
function handler() {
    return __awaiter(this, void 0, void 0, function* () {
        //Crie uma pasta chamada 'files' dentro da pasta src
        const file = fs.createWriteStream('C:/Users/Andre/Documents/GitHub/exemplo-de-lambda-AWS/lambda-app/src/files/index.html');
        //Escreva o conteúdo do arquivo
        file.write('<h1>Hello World</h1>');
        //Feche o arquivo
        file.end();
        //Try catch para verificar se o arquivo foi criado
        try {
            //Retorna o arquivo
            return fs.readFileSync('C:/Users/Andre/Documents/GitHub/exemplo-de-lambda-AWS/lambda-app/src/files/index.html', 'utf8');
        }
        catch (err) {
            //Retorna o erro
            return err;
        }
    });
}
exports.handler = handler;
