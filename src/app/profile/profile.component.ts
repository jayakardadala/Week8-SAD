import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = 'John Doe';
  email: string = 'john@example.com';
  phoneNumber: string = '123-456-7890';
}
