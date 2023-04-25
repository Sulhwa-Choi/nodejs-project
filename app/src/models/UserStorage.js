"use strict";

class UserStorage {
    static #users = { // #은 private
        id : ["woorimIT","나개발","김팀장"],
        psword : ["1234","1234","123456"],
        name : ["우리" , "나나" , "팀"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // user의 키값들만 배열로 만듦
        const userInfo = userKeys.reduce((newUser , info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users); // 방금 push한 데이터는 서버가 유지되는 동안만 저장됨
    }

}


module.exports = UserStorage;