import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    onSubmit(form: NgForm) {
        console.log(form.value);
        form.reset();
        form.form.patchValue({
            subscription: 'Advanced'
        });
    }

    constructor() { }

    ngOnInit(): void {
    }

}
