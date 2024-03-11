export class User{
    private email: string;
    private lastname: string;
    private firstname: string;
    private password: string;

    constructor(email:string, lastname:string, firstname:string, password:string){
        this.email = email;
        this.lastname = lastname;
        this.firstname = firstname;
        this.password = password;
    }    
}