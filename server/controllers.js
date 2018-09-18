const { Product } = require("./models");

module.exports = {
    getProducts : (req, res) => Product.find({})
                                       .then(data => console.log("controllers: getProducts", data) || res.json(data))
                                       .catch(errs => console.log("controllers: getProducts had errors", errs) || res.json(errs)),
    getProduct : (req, res) => Product.findById(req.params.id)
                                      .then(data => console.log("controllers: getProduct", data) || res.json(data))
                                      .catch(errs => console.log("controllers: getProduct had errors", errs) || res.json(errs)),
    postProduct : (req, res) => Product.create(req.body)
                                         .then(data => console.log("controllers: createProduct", data) || res.json(data))
                                         .catch(errs => console.log("controllers: createProduct had errors", errs) || res.json(errs)),
    putProduct : (req, res) => Product.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true })
                                         .then(data => console.log("controllers: updateProduct", data) || res.json(data))
                                         .catch(errs => console.log("controllers: updateProduct had errors", errs) || res.json(errs)),
    deleteProduct : (req, res) => Product.findByIdAndRemove(req.params.id)
                                         .then(data => console.log("controllers: deleteProduct", data) || res.json(data))
                                         .catch(errs => console.log("controllers: deleteProduct had errors", errs) || res.json(errs)),   
}