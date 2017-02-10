import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';

@Component({
    moduleId: module.id,
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: [ 'search.component.css' ]
})
export class SearchComponent implements OnInit {
    searchForm: FormGroup;
    errorMessage: string;

    constructor(private growler: GrowlerService) {
    }

    ngOnInit() {
    }
}