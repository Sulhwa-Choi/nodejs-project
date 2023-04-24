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

}


module.exports = UserStorage;