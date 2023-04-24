
const User = require("../../models/User");

const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    login : (req, res)=>{
        res.render("home/login");
    }

}



const process = {
    login : (req, res) => {
        const user = new User(req.body); // User class를 인스턴스화 할때 req.body의 값을 들고 생성됨
        const response = user.login();
        return res.json(response);
    },
}



module.exports = {
    output,
    process,
};