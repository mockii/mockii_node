/**
 * Created by Billa on 12/24/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {SearchType} from "../model/SearchType";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {UserProfile} from "../model/UserProfile";
import {AdminService} from "./admin.service";

@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit{
    adminTitle: String;

    ngOnInit():void {
        this.adminTitle = 'This is Admin.';
    }
}