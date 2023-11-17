import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { RedButtonViewComponent } from 'app/pages/red-button/view/view.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    {
        path: 'reports',
        loadChildren: () => import('../../pages/reports/reports.module').then((m) => m.ReportsModule)
    },
    // {

    //     path: 'red-button',
    //     loadChildren: () => import('../../pages/red-button/red-button.module').then((m) => m.RedButtonModule)
    // }
    {
        path: 'red-button',
        component: RedButtonViewComponent
    }
];
