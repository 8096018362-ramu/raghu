import { Component } from '@angular/core';
import { AppServices } from 'app/pages/services/app.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'report-view',
    moduleId: module.id,
    templateUrl: 'view.component.html'
})

export class RedButtonViewComponent {
    actionForm: FormGroup;
    submitted = false;
    public actionsList: any = [];
    selectedAction = null;
    selectedActionObj: any = {};
    actionBoxStatus1 = false;

    actionBoxStatus2 = false;

    actionBoxStatus3 = false;

    constructor(
        private formBuilder: FormBuilder,
        public appService: AppServices,
        public router: Router
    ) {

    }


    ngOnInit() {
        //this.loadActions()
        this.actionsList = [{
            "id": "1234",
            "name": "Disable all HES_Clocked_In rules",
            "description": "This action will allow all users to log into any applicaction regardless of Clocked In status"
        },
        {
            "id": "1235",
            "name": "Disable an application's HES_Clocked_In rules",
            "description": "This action will allow all users to log into the selected application regardless of Clocked In status"
        },
        {
            "id": "1236",
            "name": "Enable all HES_Clocked_In rules",
            "description": "This will enforce the Clocked In rule for all applications it is assigned to"
        },
        {
            "id": "1238",
            "name": " Enable application’s HES_Clocked_in",
            "description": "This will enforce the Clocked In rule for the selected application."
        },
        {
            "id": "1231",
            "name": "Clear all sessions for a user",
            "description": "This will clear a user's session and force them to re-authenticate."
        }]
        this.actionForm = this.formBuilder.group({
            acceptTerms: [false, Validators.required]
        });
    }

    get f() { return this.actionForm.controls; }

    loadActions() {
        this.appService.fetchActons().subscribe((data) => {
            this.actionsList = data;
        })
    }

    onSelectAction(event) {
        console.log(event)
        this.selectedActionObj = {};
        this.actionsList.find((obj) => {
            if (obj.id == event) {
                this.selectedActionObj = obj;
            }
        })
    }

    acceptTerms(id) {
        if (id == 1) {
            this.actionBoxStatus1 = !this.actionBoxStatus1

        } else if (id == 2) {
            this.actionBoxStatus2 = !this.actionBoxStatus2

        } else if (id == 3) {
            this.actionBoxStatus3 = !this.actionBoxStatus3

        }
    }

    getBtnStatus() {
        if (this.actionBoxStatus1 && this.actionBoxStatus2 && this.actionBoxStatus3) {
            return false
        } else {
            return true
        }
    }

    submitAction() {
        // let payload = {

        //     "actionID": "string",
        //     "actorID": "string",
        //     "verUserAff": "string",
        //     "verTWO": "string",
        //     "verThree": "string",
        //     "applicationID": "string"

        // }
        // this.appService.updateAction({}).subscribe((data) => {

        // })

        this.router.navigate(['./dashboard']);

    }

}
