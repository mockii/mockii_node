/**
 * Created by Billa on 12/24/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {SearchType} from "../model/SearchType";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {UserProfile} from "../model/UserProfile";
import {RecruiterService} from "./recruiter.service";

@Component({
    moduleId: module.id,
    selector: 'app-recruiter',
    templateUrl: 'recruiter.component.html',
    styleUrls: ['recruiter.component.css']
})
export class RecruiterComponent implements OnInit{
    recruiterLabel:String;
    ngOnInit():void {
        this.recruiterLabel = 'This is Recruiter Module';
    }
}