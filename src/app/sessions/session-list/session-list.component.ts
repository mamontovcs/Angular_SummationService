import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor(public service : SessionService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete this?')){
      this.service.deleteSession(id).subscribe(res =>
      this.service.refreshList()
      );
    }
  }

}
