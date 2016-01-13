import {Component, Input, OnChanges} from "angular2/core";
import {PeriodicTableService} from "./periodic-table.service";
import {StyledName} from "./styled-name"

@Component({
    selector: 'breaking-bad-name',
    styleUrls: ['css/breakingBad.css'],
    template: `
    <div>
        <audio autoplay>
            <source src="http://timpietrusky.com/cdn/breaking_bad_intro.ogg" type="audio/ogg">
        </audio>
        <div id="breaking-bad">
            <div id="bb-body">
                <div class="name" *ngIf="styledFirst">
                    <div class="left">{{styledFirst.firstPart}}</div>
                    <div [ngClass]="{'periodic-element': styledFirst.element.symbol}" title="{{styledFirst.element.name}}">
                        {{styledFirst.element.symbol}}<span class="atomic-num">{{styledFirst.element.atomicNum}}</span>
                    </div>
                    <div class="left">{{styledFirst.lastPart}}</div>
                    <div class="left" *ngIf="!styledFirst.element.symbol">{{first}}</div>
                </div>
                <div style="clear: both"></div>
                <div class="name" style="padding-left: 202px" *ngIf="styledLast">
                    <div class="left">{{styledLast.firstPart}}</div>
                    <div [ngClass]="{'periodic-element': styledLast.element.symbol}" title="{{styledLast.element.name}}">
                        {{styledLast.element.symbol}}<span class="atomic-num">{{styledLast.element.atomicNum}}</span>
                    </div>
                    <div class="left">{{styledLast.lastPart}}</div>
                    <div class="left" *ngIf="!styledLast.element.symbol">{{last}}</div>
                </div>
            </div>
        </div>
        <div style="text-align: center" *ngIf="(styledLast && styledLast.element.symbol) || (styledFirst && styledFirst.element.symbol)">
            Hover over element for it's name
        </div>
    </div>
    `
})
export class BreakingBadNameComponent implements OnChanges {
    @Input() first: string;
    @Input() last: string;
    @Input() styledFirst: StyledName;
    @Input() styledLast: StyledName;

    constructor(private _tableService: PeriodicTableService) {}

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        let firstCurrentValue = changes['first'] ? changes['first'].currentValue : undefined;
        let lastCurrentValue  = changes['last'] ? changes['last'].currentValue : undefined;

        if(firstCurrentValue) {
            this._tableService.findMatches(firstCurrentValue).then((styledFirst: StyledName) =>
                this.styledFirst = styledFirst
            );
        }

        if(lastCurrentValue) {
            this._tableService.findMatches(lastCurrentValue).then((styledLast: StyledName) =>
                this.styledLast = styledLast
            );
        }
    }
}