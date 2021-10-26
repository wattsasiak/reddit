import { HttpClient } from '@angular/common/http';
import { RedditItem } from './reddit'; 
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paupersreddit';
  items? : RedditItem

  constructor(private http: HttpClient){}

  getPosts(){
    const url = 'https://www.reddit.com/r/aww/.json';
    this.http.get<any>(url).subscribe(
      (result: RedditItem) =>{
       this.items = result;
       console.log(this.items);
      }  
    );
  }
}

