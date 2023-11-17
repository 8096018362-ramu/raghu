import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'assets/navigation/dashboard.svg', class: '' },
    { path: '/reports', title: 'Reports', icon: 'assets/navigation/reports.svg', class: '' },
    { path: '/user', title: 'Manage User', icon: 'assets/navigation/users.svg', class: '' },
    { path: '/red-button', title: 'Red Button', icon: 'assets/navigation/red-button.svg', class: 'active-pro' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
