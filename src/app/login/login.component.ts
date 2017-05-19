import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { ValidationService } from '../core/services/validation.service';
import { IUserLogin } from '../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';
import {IModalContent, ModalService} from "../core/modal/modal.service";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})
export class LoginComponent implements OnInit, IModalContent {
    loginForm: FormGroup;
    errorMessage: string;
    header: string;
    cancelButtonText:string;
    OKButtonText:string;
    body:string;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private authService: AuthService,
                private growler: GrowlerService,
                private modal:ModalService) {
        this.header = "Login";
        this.cancelButtonText = "Go Back";
        this.OKButtonText = "Login";
        // this.body = require('./login.component.html');
        // console.log(require('./login.component.html'));
    }

    ngOnInit() { 
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email:      ['', [ Validators.required, ValidationService.emailValidator ]],
            password:   ['', [ Validators.required, ValidationService.passwordValidator ]]
        });
    }

    /*submit({ userLogin, valid }: { userLogin: IUserLogin, valid: boolean }) {
        this.authService.login(userLogin)
            .subscribe((status: boolean) => {
                if (status) {
                    this.growler.growl('Logged in', GrowlerMessageType.Info);
                    if (this.authService.redirectUrl) {
                        const redirectUrl = this.authService.redirectUrl;
                        this.authService.redirectUrl = '';
                        this.router.navigate([redirectUrl]);
                    } else {
                        this.router.navigate(['/home']);
                    }
                } else {
                    const loginError = 'Unable to login';
                    this.errorMessage = loginError;
                    this.growler.growl(loginError, GrowlerMessageType.Danger);
                }
            },
            (err: any) => console.log(err));
    }*/

}