import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { UsersViewComponent } from './pages/users-view/users-view.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: UsersListComponent },
    { path: "newuser", component: UsersFormComponent },
    { path: "user/:_id", component: UsersViewComponent},
    { path: "updateuser/:_id", component: UsersFormComponent},
    {path: "**", redirectTo: "home"}
];
