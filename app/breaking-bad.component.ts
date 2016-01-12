import {Component} from 'angular2/core';
import {PeriodicTableService} from "./periodic-table.service";
import {BreakingBadNameComponent} from "./breaking-bad-name.component";
import {Name} from './name';

@Component({
    selector: 'ng-breaking-bad',
    template: `
        <div>
            <h1>SAY MY NAME</h1>
            <div class="input-group" style="width: 250px; text-align: center">
                <span class="input-group-addon">First:</span>
                <input class="form-control" autofocus type="text" [(ng-model)]="name.firstName"
                       placeholder="Enter first name..">
            </div>
            <div class="input-group" style="width: 250px; text-align: center">
                <span class="input-group-addon">Last:</span>
                <input class="form-control" type="text" [(ng-model)]="name.lastName" placeholder="Enter last name..">
            </div>
        </div>
        <breaking-bad-name [first]="name.firstName" [last]="name.lastName"></breaking-bad-name>
    `,
    providers: [PeriodicTableService],
    directives: Array[BreakingBadNameComponent]
})
export class BreakingBadComponent {
    public name = Name;
    constructor(private _tableService: PeriodicTableService) { }
}