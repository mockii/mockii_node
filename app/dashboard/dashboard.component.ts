/**
 * Created by Billa on 12/24/16.
 */
import { Component } from '@angular/core';
import {SearchType} from "../model/SearchType";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
    searchLabel: String = 'Search';
    searchTypes: SearchType[];
    selectedSearchType: SearchType;

    ngOnInit():void {
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
}
