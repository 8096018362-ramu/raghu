import { Component, OnInit } from '@angular/core';
import { AppServices } from '../services/app.services';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    public usersList: any = [
    ];

    constructor(
        public appService: AppServices
    ) {

    }

    ngOnInit() {
        this.loadUsers()
    }

    loadUsers() {
        this.appService.fetchUsers().subscribe((data) => {
            //this.usersList = data;
            this.usersList = data;
        })
    }



}
