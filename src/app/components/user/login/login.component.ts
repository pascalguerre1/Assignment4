import { Component, OnInit, ViewChild } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@ViewChild('f') loginForm: NgForm;

	username: string;
	password: string;
	errorFlag: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(){
  	this.username = this.loginForm.value.username;
  	this.password = this.loginForm.value.password;

    //const user: User = this.userService.findUserByCredentials(this.username, this.password);
    this.userService.findUserByCredentials(this.username, this.password).subscribe(
      (user: User) => {
        this.errorFlag = false
        this.router.navigate(['/user/' + user._id]);
      },
      (error: any) => {
        this.errorFlag = true;
      }
      )
  	// if (user != undefined) {
  	// 	//navigate to profile
  	// 	this.errorFlag = false
  	// 	this.router.navigate(['/user/' + user._id]);
  	// } else {
  	// 	this.errorFlag = true;
  	// }
  }
}
