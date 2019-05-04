import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'singlepageapplication';
  entries = [{
    id:1,
    fullname: "Neela Krishna Teja Tadikonda",
    userName: "NA",
    email: "nktejat@gmail.com"
  }]
}
