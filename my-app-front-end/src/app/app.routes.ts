import { Routes } from '@angular/router';
import { HomePage } from './modules/home/home.page';
import { Register } from './modules/register/register.page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'register', component : Register},
];
