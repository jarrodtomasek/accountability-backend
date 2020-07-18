import { DBConnection } from "./connect";

let connection = new DBConnection();

export default class UserManagement {

    static registerUser() {
        try {
            let sql = "INSERT INTO user SET ?";
            let query = ""
        } catch (e) {

        }
    }

    static loginUser() {
        
    }

    static generateAuthToken() {

    }
}