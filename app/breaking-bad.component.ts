import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {PeriodicTableService} from "./periodic-table.service";
import {BreakingBadNameComponent} from "./breaking-bad-name.component";
import {Name} from './name';

@Component({
    selector: 'breaking-bad',
    template: `
        <div>
            <h1>SAY MY NAME</h1>
            <div class="input-group" style="width: 250px; text-align: center">
                <span class="input-group-addon">First:</span>
                <input class="form-control" autofocus type="text" [(ngModel)]="name.firstName"
                       placeholder="Enter first name..">
            </div>
            <div class="input-group" style="width: 250px; text-align: center">
                <span class="input-group-addon">Last:</span>
                <input class="form-control" type="text" [(ngModel)]="name.lastName" placeholder="Enter last name..">
            </div>
        </div>
        <hr>
        <breaking-bad-name [(first)]="name.firstName" [(last)]="name.lastName"></breaking-bad-name>
    `,
    providers: [PeriodicTableService],
    directives: [BreakingBadNameComponent, FORM_DIRECTIVES]
})
export class BreakingBadComponent {
    @Input() name: Name = {
        firstName: "Breaking",
        lastName: "Bad"
    };
}