export class UserInfoModel {
    guid: "string";
    customer_uid: "string";
    firstname: "string";
    lastname: "string";
    email: "string";
    zipCode: "string";
    password: "string";


    constructor(guid: "string", customer_uid: "string", firstname: "string", lastname: "string", email: "string", zipCode: "string", password: "string") {
        guid = this.guid;
        customer_uid = this.customer_uid;
        firstname = this.firstname;
        lastname = this.lastname;
        email = this.email;
        zipCode = this.zipCode;
        password = this.password;
    }
}