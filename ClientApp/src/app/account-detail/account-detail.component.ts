import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
