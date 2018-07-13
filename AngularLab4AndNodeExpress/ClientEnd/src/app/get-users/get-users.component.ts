import { Component, OnInit } from '@angular/core';
import { GetProtectedUsersService } from '../../services/get-protected-users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor(private getUsersService: GetProtectedUsersService, private http: HttpClient) { }

  ngOnInit() {
    this.getUsersService.getUsers(this.http);
  }

}
