const express = require("express");
const path = require("path");

class Server {
    constructor({ config, router }) {
        this._config = config;
        this._express = express();
        this._express.use(router);
        
    }

    start() {
        
        return new Promise((resolve, reject) =>{
            const http = this._express.listen(this._config.PORT, () => {
                const { port } = http.address();
                console.log('Server on port ' + port); 
                resolve();
            });

            //this._express.use(express.urlencoded({extended: false}))
            //this._express.set("views", path.join(__dirname, "views"))
            //console.log(this._express.get("views"))
        });
    }
}

module.exports = Server;