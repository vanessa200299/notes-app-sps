import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import de componentes
import { AppUserIndexComponent } from './components/user/app-user-index/app-user-index.component'
import { AppNoteListComponent } from './components/note/app-note-list/app-note-list.component'
import { AppNoteCreateComponent } from './components/note/app-note-create/app-note-create.component'


//Declarando rutas
const appRoutes: Routes = [
    {
        path: '', component: AppNoteListComponent
    },
    {
        path: 'users', component: AppUserIndexComponent
    },
    {
        path: 'note/create', component: AppNoteCreateComponent
    },
    {
        path: 'note/edit/:id', component: AppNoteCreateComponent
    }
];

export const AppRoutingProviders:any[] =[];
export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);