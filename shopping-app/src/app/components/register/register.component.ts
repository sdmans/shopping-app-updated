import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(userName, email, password, verifyPassword): void {
    // console.log(userName.value, email.value, password.value, verifyPassword.value);

    if (password.value === verifyPassword.value) {
      const user = {
        name: userName.value,
        email: email.value,
        password: password.value
      }
      console.log(user);
    } else {
      console.log("Passwords don't seem to match, please re-enter your credentials");
    }
      
  }

}
