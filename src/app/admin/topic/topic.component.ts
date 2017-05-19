/**
 * Created by Billa on 12/24/16.
 */
import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {Topic} from "../../model/Topic";

@Component({
  moduleId: module.id,
  selector: 'admin-topic',
  templateUrl: 'topic.component.html',
})
export class TopicComponent implements OnInit
{
  topics: Topic[];
  errorMessage: any;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.adminService.getTopics().then(topics => this.topics = <Topic[]>topics,
                                      error =>  this.errorMessage = <any>error);
  }
}
