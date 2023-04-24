
const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id;
        const psword = req.body.psword;
        const response = {}; // return할 객체

        //const userStorage = new UserStorage();
        //console.log(userStorage.users);
        // 객체생성을 안하고 밑에처럼 바로 가져다 쓰면 undefined가 뜨기때문에
        // model 객체에 static을 넣어줘야함
        const users = UserStorage.getUsers("id","psword"); 

        



        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인 실패";
        return res.json(response);
    },
}



module.exports = {
    output,
    process,
};