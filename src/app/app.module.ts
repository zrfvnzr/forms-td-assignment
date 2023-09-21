import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'form', component: FormComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
