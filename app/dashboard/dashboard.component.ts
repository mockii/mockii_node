/**
 * Created by Billa on 12/24/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {SearchType} from "../model/SearchType";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {UserProfile} from "../model/UserProfile";
import {DashboardService} from "./dashboard.service";

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    searchLabel: String;
    searchTypes: SearchType[];
    selectedSearchType: SearchType;

    @Input()
    userProfile: UserProfile = new UserProfile();

    constructor(private modalService: NgbModal, private dashboardService: DashboardService) {}

    ngOnInit():void {
        this.searchLabel = 'Search';
        this.getSearchTypes();
    }

    getSearchTypes():void {
        // TODO: Move this to a service call.
        this.searchTypes = [
            {
                searchClass: 'glyphicon glyphicon-user',
                searchType: 'Search by User'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: 'Search By Location'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: 'Search by Technology'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: 'Search by Topic'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: 'Search by Occupation'
            },
            {
                searchClass: 'glyphicon glyphicon-book',
                searchType: 'Search by Occupation Category'
            }
        ]
    }

    onSelectSearchType(type: SearchType):void {
        this.selectedSearchType = type;
        this.searchLabel = this.selectedSearchType.searchType;
    }

    closeResult: string;

    open(content: any) {
        this.modalService.open(content).result.then((result) => {
            this.dashboardService.create(this.userProfile);
            window.alert('Successfully created user :'+this.userProfile.firstName);
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}