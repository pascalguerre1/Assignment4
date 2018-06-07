import { Injectable } from '@angular/core';
import {Website} from '../models/website.model.client';
import {Http, Response} from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class WebsiteService {

  baseUrl = environment.baseUrl;

constructor(private http: Http) { }

  // websites: Website[] = [
  //   { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  //   { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  //   { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  //   { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  //   { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  //   { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  //   { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  // ];


 // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
  createWebsite(userId: string, website:  Website) {
    // website._id = Math.floor(Math.random() * 10000).toString();
    // website.developerId = userId;
    // this.websites.push(website);
    // return website;
    const url = this.baseUrl + '/api/user/'+ userId + '/website';
    return this.http.post(url, website).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));
  }

// retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsitesByUser(userId: string) {
    const url = this.baseUrl + '/api/user/'+ userId + '/website';
    return this.http.get(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));

    // var result = [];
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x].developerId === userId) {
    //     result.push(this.websites[x]);
    //    }
    // }
    // return result;
  }
// retrieves the website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(websiteId: string) { 
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x]._id === websiteId) {
    //     return this.websites[x];
    //     }
    // }
    const url = this.baseUrl + '/api/website/'+ websiteId;
    return this.http.get(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));

   }
// updates the website in local websites array whose _id matches the websiteId parameter
  updateWebsite(websiteId: string, website:  Website) { 
    // var oldWeb = this.findWebsiteById(websiteId);
    // var index = this.websites.indexOf(oldWeb);
    // this.websites[index].name = website.name;
    // this.websites[index].description = website.description;

    const url = this.baseUrl + '/api/website/'+ websiteId;
    return this.http.put(url, website).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));

   }
// removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(websiteId: string) { 
    // var web = this.findWebsiteById(websiteId);
    // var index = this.websites.indexOf(web);
    // this.websites.splice(index,1);

    const url = this.baseUrl + '/api/website/'+ websiteId;
    return this.http.delete(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));

   }
}