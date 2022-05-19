import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private communicationSrv: CommunicationService) { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.communicationSrv.sendInfo();
  }

}
