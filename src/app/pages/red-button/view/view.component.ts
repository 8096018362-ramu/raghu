import { Component } from '@angular/core';
import { AppServices } from 'app/pages/services/app.services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";


@Component({
    selector: 'report-view',
    moduleId: module.id,
    templateUrl: 'view.component.html'
})

export class RedButtonViewComponent {
    public actionForm: FormGroup;
    public submitted = false;
    public actionsList: any = [];
    public selectedActionObj: any = {};


    constructor(
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        public appService: AppServices,
        public router: Router
    ) {
        this.actionForm = this.formBuilder.group({
            actionID: ['', Validators.required],
            verUserAff: [false, Validators.required],
            verTWO: [false, Validators.required],
            verThree: [false, Validators.required],
            notes: ['', Validators.required]
        });
    }


    ngOnInit() {
        //this.loadActions()
        this.actionsList = [
            {
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

    }


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


    onSubmit() {
        console.log(this.actionForm.value)
        let obj = this.actionForm.value;
        let payload = {
            actionID: obj.actionID,
            actorID: '',
            verUserAff: 'true',
            verTWO: 'true',
            verThree: 'true',
            applicationID: '',
            notes: obj.notes
        }
        // this.appService.updateAction({}).subscribe((data) => {

        // })


        this.toastr.info(
            `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${this.selectedActionObj.name}</b> - Action Updated Successfully...</span>`,
            "",
            {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-info alert-with-icon",
                positionClass: "toast-" + 'top' + "-" + 'center'
            }
        );
        setTimeout(() => {
            this.router.navigate(['./dashboard']);
        }, 4000);

    }

}
