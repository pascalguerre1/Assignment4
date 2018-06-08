import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';
import {Http, Response} from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class PageService {

  baseUrl = environment.baseUrl;

constructor(private http: Http) { }

  // pages: Page[] = [
  //   { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  //   { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  //   { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
  // ]

  // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
  createPage(websiteId: string, page: Page){
    const url = this.baseUrl + '/api/website/'+ websiteId + '/page';
    return this.http.post(url, page).pipe(map(
        (response: Response) => {
          return response.json();
        }
    ));
      // page._id = Math.floor(Math.random() * 10000).toString();
      // page.websiteId = websiteId;
      // this.pages.push(page);
      // return page;
  }
  // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
  findPageByWebsiteId(websiteId: string){
    const url = this.baseUrl + '/api/website/'+ websiteId + '/page';
    return this.http.get(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
    ));
      // var result = [];
      // for (let x = 0; x < this.pages.length; x++) {
      //   if (this.pages[x].websiteId === websiteId) {
      //     result.push(this.pages[x]);
      //    }
      // }
      // return result;
  }
  // retrieves the page in local pages array whose _id matches the pageId parameter
  findPageById(pageId: string){
    const url = this.baseUrl + '/api/page/'+ pageId;
    return this.http.get(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
    ));

      // for (let x = 0; x < this.pages.length; x++) {
      //   if (this.pages[x]._id === pageId) {
      //     return this.pages[x];
      //     }
      // }
  }
  // updates the page in local pages array whose _id matches the pageId parameter
  updatePage(pageId: string, page: Page){
    const url = this.baseUrl + '/api/page/'+ pageId;
    return this.http.put(url, page).pipe(map(
        (response: Response) => {
          return response.json();
        }
    ));
    // var oldPage = this.findPageById(pageId);
    // var index = this.pages.indexOf(oldPage);
    // this.pages[index].name = page.name;
    // this.pages[index].description = page.description;
  }
  // removes the page from local pages array whose _id matches the pageId parameter
  deletePage(pageId: string){
    const url = this.baseUrl + '/api/page/'+ pageId;
    return this.http.delete(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
    ));

    // var oldPage = this.findPageById(pageId);
    // var index = this.pages.indexOf(oldPage);
    // this.pages.splice(index,1);
  }

}