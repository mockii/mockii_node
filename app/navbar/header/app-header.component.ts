import { Component } from '@angular/core';
import { ROUTES } from 'app/navbar/header/app-header-routes.config';
import { RouterModule, Routes, RouterLink, RouterLinkActive, RouterOutlet, RouterOutletMap } from '@angular/router';
import { MenuType } from 'app/navbar/header/app-header.metadata';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
    public menuItems: any[];
    public brandMenu: any;
    isCollapsed = true;

    constructor() {}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    public getMenuItemClasses(menuItem: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }
}
