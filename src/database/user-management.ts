import { DBConnection } from "./connect";

let connection = new DBConnection();

export default class UserManagement {

    static registerUser() {
        try {
            let sql = "SELECT * FROM user ";
            
            connection.myConnection.query(sql, (err, rows, fiels) => {
                if (err) {
                    console.log(err);
                }

                console.log(rows)
            })
        } catch (e) {

        }
    }

    static loginUser() {
        
    }

    static generateAuthToken() {

    }
}