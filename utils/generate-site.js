const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an error, reject the promise and send the error to 
            // to the promises .catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise 
                // doesnt accidentally execute the resolve() function as well
                return;
            }
            // if everthing went well, resolve the promise and send the successful 
            // data to the .then() method
            resolve({
                ok: true,
                message: 'file created'
            });
        });
    });
};