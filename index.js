const express = require("express");
const app = express();


app.use(express.json());
app.get("/users", function(req, res){
    res.json({
        "id":1,
        "nome": "Yara"
    })
})


app.listen(3000, function(){
    console.log("Marcus esta ativo");

})


