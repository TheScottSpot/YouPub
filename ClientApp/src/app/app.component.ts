import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('YouPub');
    this.auth.handleAuthentication();
  }
}
