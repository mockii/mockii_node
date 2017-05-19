import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/subscription';

import { AuthService } from '../../services/auth.service';
import { GrowlerService, GrowlerMessageType } from '../../growler/growler.service';
import {ModalService} from "../../modal/modal.service";
import {LoginComponent} from "../../../login/login.component";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.navbar.component.html',
    styleUrls: ['header.navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean = true;
    loginLogoutText: string = 'Login - Sign up';
    sub: Subscription;
    searchModel: string;
    searchFont: string;

    constructor(private router: Router,
                private authService: AuthService,
                private growler: GrowlerService,
                private modal: ModalService) { }

    ngOnInit() {
        this.sub = this.authService.authChanged
            .subscribe((loggedIn: boolean) => {
                if(loggedIn)
                {
                  this.router.navigate(['/dashboard']);
                } else {
                  this.router.navigate(['/home']);
                }
                this.setLoginLogoutText();
            },
            (err: any) => console.log(err));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loginOrOut() {
        const isAuthenticated = this.authService.authenticated();
        if (isAuthenticated) {
            this.authService.logout()
                .subscribe((status: boolean) => {
                    console.log(this.loginLogoutText);
                    this.setLoginLogoutText();
                    this.growler.growl('Logged Out', GrowlerMessageType.Info);
                    // this.router.navigate(['/home']);
                    return;
                },
                (err: any) => console.log(err));
        }
        this.redirectToLogin();
    }
    
    redirectToLogin() {
        // this.router.navigate(['/login']);
        // console.log(LoginComponent.templateUrl);
        // this.modal.show(new LoginComponent());
        this.authService.login();
    }

    setLoginLogoutText() {
        console.log(this.loginLogoutText);
        this.loginLogoutText = (this.authService.authenticated()) ? 'Logout' : 'Login - Sign up';
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    searchMockiiChange(value:any ): void {
        this.searchModel = value;
        if(value === "") {
            this.searchFont = 'cursive';
        } else {
            this.searchFont = 'initial';
        }
    }

    searchMockiiOnEnter(event: any ): void {
        if(event.keyCode === 13) {
            if(!this.isCollapsed) {
                this.isCollapsed = !this.isCollapsed;
            }
            //TODO: Call Search Service
            console.log("Call Search Service for Search Query", this.searchModel);
            this.router.navigate(['/search']);
        }
    }

    navigateTo() {
        this.isCollapsed = true;
        this.searchMockiiChange('');
    }
}