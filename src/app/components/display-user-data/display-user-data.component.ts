import { Component } from '@angular/core';
import { UserInfoModel } from 'src/app/models/userInfoModel';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent {

user: UserInfoModel;

}
