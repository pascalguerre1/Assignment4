import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  uid: string;
  wid: string;
  pid: string;
  widgets: Widget[];

  constructor(private widgetService: WidgetService, 
  	private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	  	this.activatedRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
  	})
  }

  getYoutubeURL(url){
  	let embedUrl = "https://www.youtube.com/embed/";
  	const parsedUrl = url.split('/');
  	
  	//transfer video url into embeded video url
  	embedUrl += parsedUrl[parsedUrl.length - 1];

  	//tell browser this source is safe
  	return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
