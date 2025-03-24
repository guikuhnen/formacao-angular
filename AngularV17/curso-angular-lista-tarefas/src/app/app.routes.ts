import { Routes } from '@angular/router';

//#region PAGES
import { ListComponent } from './modules/to-do-list/pages/list/list.component';
//#endregion

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];
