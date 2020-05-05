import * as fs from 'fs';
export function uploadFile(file: any, fullFilePath: string) {
    return file.mv(fullFilePath);
}
export function deleteFile(fullFilePath: string) {
    return new Promise((resolve, reject) => {
        fs.unlink(fullFilePath, function(err) {
            if (err) return reject(err);
            resolve('Arquivo => ' + fullFilePath + ' deletado com sucesso.');
        });
    });
}
