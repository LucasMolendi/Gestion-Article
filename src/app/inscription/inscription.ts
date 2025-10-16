import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

export class User {
  public name: string = ""
  public email: string = ""
  public password: string = ""
}

@Component({
  selector: 'app-inscription',
  imports: [
    FormsModule
  ],
  templateUrl: './inscription.html',
  styleUrl: './inscription.scss'
})
export class Inscription {
  public user: User = new User()

  sendFormData() {
    alert(JSON.stringify(this.user));
  }
}
