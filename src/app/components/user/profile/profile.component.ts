import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	@ViewChild('f') profileForm: NgForm;

	uid: string;
	// user: User;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	oldUsername: string;
	usernameTaken: boolean;
	submitSuccess: boolean;
  aUser: User;
  user: User = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
   };


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private sharedService: SharedService) { }

  ngOnInit() {
    this.usernameTaken = false;
    this.submitSuccess = false;
    this.user = this.sharedService.user;
    this.username = this.user.username;
    this.email = this.user.email;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName
    this.oldUsername = this.user.username;
  }

  update(){
  	this.username = this.profileForm.value.username;
  	this.email = this.profileForm.value.email;
  	this.firstName = this.profileForm.value.firstName;
  	this.lastName = this.profileForm.value.lastName;

  	//check if new user is taken or the username was not changed
    this.userService.findUserByUsername(this.username).subscribe(
      (user: User) => {
        this.aUser = user;
      }
    );
    //check if new user is taken or the username was not changed
  	if (this.aUser != undefined && this.oldUsername !== this.username){
  		this.usernameTaken = true;
  		this.submitSuccess = false;
  	} else {
  		  const updatedUser: User = {
  			_id: this.user._id,
  			username: this.username,
  			password: this.user.password,
  			firstName: this.firstName,
  			lastName: this.lastName,
  			email: this.email,
  		};
  		this.userService.updateUser(this.user._id, updatedUser).subscribe(
        (user2: User) =>{
          this.usernameTaken = false;
          this.submitSuccess = true;
        }
      );
  	}

  }

}
