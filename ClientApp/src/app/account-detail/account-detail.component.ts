import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {

  public message: string;

  constructor(private auth: AuthService,
            ) { }

  ngOnInit() {
  }

  public async testApi() {

    const users = await this.auth.testApi().toPromise();

    if (users.length) {
    }


  }

}
