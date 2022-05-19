import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  navList: string[] = ['Home', 'About Us', 'Contact Page'];
  @ViewChild('drawer') public drawer: MatSidenav;
  constructor(private communicationSrv: CommunicationService) { }

  ngOnInit(): void {
    this.communicationSrv.infoSubject.subscribe(()=>{
      this.drawer && this.drawer.toggle();
    });
  }

}
