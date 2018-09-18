const path = require("path");
const bp = require("body-parser");
const api = require("./controllers.js");

module.exports = function(app){
    app.use(bp.json());

    app.get("/api/products", api.getProducts);
    app.get("/api/products/:id", api.getProduct);
    app.post("/api/products", api.postProduct);
    app.put("/api/products/:id", api.putProduct);
    app.delete("/api/products/:id", api.deleteProduct);

    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}