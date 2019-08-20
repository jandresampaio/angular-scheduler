import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>
                <scheduler></scheduler>`
})

export class AppComponent implements OnInit {
    title      = 'Angular 8 - Scheduler Demo';
    eventTitle = '';

    ngOnInit(){
       
    }

}
