"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // user의 키값들만 배열로 만듦
        const userInfo = userKeys.reduce((newUser , info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        //const users = this.#users;
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch((err) => console.error(err));

        

        
    }

    static getUserInfo(id) {
        //const users = this.#users;
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.error(err));

    }

    

    static async save(userInfo) {
        // 기존 데이터를 불러오고 그 데이터에 새로운 user 데이터를 추가해서 저장해야함
        // 그렇지 않으면 기존데이터에 새 user데이터가 덮어씌이게됨
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json",JSON.stringify(users));
        return {success : true};
    }

}


module.exports = UserStorage;