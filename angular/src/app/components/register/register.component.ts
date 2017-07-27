import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor() { }

  ngOnInit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.password,
      password: this.password
    }
  }

  onRegisterSubmit() {
    console.log(this.name);
  }
}
