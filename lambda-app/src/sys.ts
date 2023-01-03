import * as fs from 'fs';
//Cria uma função assíncrona que gera um arquivo html
export async function handler() {
    //Crie uma pasta chamada 'files' dentro da pasta src
    const file = fs.createWriteStream('./files/index.html');
    //Escreva o conteúdo do arquivo
    file.write('<h1>Hello World</h1>');
    //Feche o arquivo
    file.end();
    //Try catch para verificar se o arquivo foi criado
    try {
        //Retorna o arquivo
        return fs.readFileSync('./files/index.html', 'utf8');
    }
    catch (err) {
        //Retorna o erro
        return err;
    }
}