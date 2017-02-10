import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/subscription';

import { AuthService } from '../../services/auth.service';
import { GrowlerService, GrowlerMessageType } from '../../growler/growler.service';
import {ModalService} from "../../modal/modal.service";
import {LoginComponent} from "../../../login/login.component";

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.navbar.component.html',
    styleUrls: ['footer.navbar.component.css']
})
export class FooterNavbarComponent implements OnInit, OnDestroy {

    constructor(private router: Router,
                private authService: AuthService,
                private growlerService: GrowlerService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}