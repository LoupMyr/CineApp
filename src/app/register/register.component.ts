import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import {User} from "../Models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private UserService: UserService){}

  onCreate(){
    const user = new User("jojo@gmail.com","Sobkowiak","Jonathan","HelloWorld");
    this.UserService.addUser(user);
    console.log(user);
  }


}
