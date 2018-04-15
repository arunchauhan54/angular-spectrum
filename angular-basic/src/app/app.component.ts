import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login = {
    title: 'My Application Title',
    email: "My Email",
  }



  submitData() {
    console.log(this.login.email);
  }


}
