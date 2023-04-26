import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  showSocialMedia:boolean = false;

  showMoreButtons():void{
    this.showSocialMedia = true;
  }

  showLessButtons():void{
    this.showSocialMedia = false;
  }
}
