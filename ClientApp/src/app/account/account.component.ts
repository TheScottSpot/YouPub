import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    
  }

}
