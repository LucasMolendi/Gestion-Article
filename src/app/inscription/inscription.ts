import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

export class User {
  public email: string = ""
  public password: string = ""
  public passwordconfirm: string = ""
  public phone: string = ""
  public city: string = ""
  public citycode: string = ""
  public pseudo: string = ""
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
  public passwordMismatch = signal<boolean>(false);
  sendFormData() {
    if (this.user.password !== this.user.passwordconfirm) {
      this.passwordMismatch.set(true);
      console.log("mod de password mismatch");
    }
  }
}
