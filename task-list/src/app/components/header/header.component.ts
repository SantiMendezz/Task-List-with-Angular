import { Component, OnInit, Input, Output } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "My Task list";
  showAddTask:boolean = false;
  subscription?: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit() {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRouter(route:string) {
    return this.router.url === route
  }
}
