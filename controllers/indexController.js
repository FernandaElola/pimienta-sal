const fs = require('fs');
const path = require('path');
let dishes = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','dishes.json'),'utf-8'));

module.exports = {
    index : (req,res) => {
        return res.render('index', {
        title : "Pimienta & Sal",
        imageAbout : "principal.jpg",
        dishes 
    });
},
    detail : (req,res) => {
       return res.render('detalleMenu', {
        dish : dishes.find(dish => dish.id === +req.params.id)
       });
    }
}