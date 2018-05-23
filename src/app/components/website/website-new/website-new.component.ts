import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

@ViewChild('f') websiteForm: NgForm;

	uid: string;
	websites: Website[];
	name: string;
	desciption: string;

  constructor(private websiteService: WebsiteService, 
  	private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	 	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.websites = this.websiteService.findWebsitesByUser(this.uid);
  	})
  }

create(){
	this.name = this.websiteForm.value.name;
	this.desciption = this.websiteForm.value.desciption;
	const newWebsite: Website = {
		_id: "",
		name: this.name,
		developerId: "",
		desciption: this.desciption,
	};
	this.websiteService.createWebsite(this.uid, newWebsite);
	// console.log(this.websiteService.websites);
	this.router.navigate(['user', this.uid, 'website']) //will combine it to user/123/website
}

}
