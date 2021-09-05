const fs = require('fs');
const path = require('path');
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
let about = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','about.json'),'utf-8'));

module.exports = {
    index : (req,res) => {
        return res.render('index', {
        title : "Pimienta&Sal",
        products,
        about 
    });
},
    detail : (req,res) => {
       return res.render('detalleMenu', {
        product : products.find(product => product.id === +req.params.id)
       });
    }
}