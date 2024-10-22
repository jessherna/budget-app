import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.registerUser(this.user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
