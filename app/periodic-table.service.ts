import {ELEMENTS} from './periodic-table-elements';
import {Injectable} from 'angular2/core';
import {StyledName} from './styled-name'

@Injectable()
export class PeriodicTableService {
    getElements() {
        return Promise.resolve(ELEMENTS);
    }

    breakNames(name: string, match: string): StyledName {
        var indexOfMatch = name.toLowerCase().indexOf(match.symbol.toLowerCase());
        var firstPart = name.substr(0, indexOfMatch);
        var lastPart = name.substr(indexOfMatch + match.symbol.length);
        var transform = firstPart + match.symbol + lastPart;

        return {
            transform: transform,
            firstPart: firstPart,
            lastPart: lastPart,
            element: match
        }
    }

    findMatches(name: string) : StyledName {
        let matches: ELEMENTS = [];

        return this.getElements().then(periodicTable => {
            periodicTable.forEach(elem => {
                var symbol = elem.symbol;
                var atomicNum = elem.atomicNum;
                var elemName = elem.name;
                if (name.toLowerCase().indexOf(symbol.toLowerCase()) != -1) {
                    matches.push(elem);
                }
            });

            if (matches) {
                var onlySingleLettered = false;
                for (i = 0; i < matches.length; i++) {
                    if (matches[i].symbol.length > 1) {
                        onlySingleLettered = false;
                        return this.breakNames(name, matches[i]);
                    } else {
                        //If you want to give priority to single letter
                        /*if(matches[i].atomicNum < 20 && matches[i].atomicNum != 1){
                         return breakNames(name, matches[i]);
                         }*/
                        onlySingleLettered = true;
                    }
                }

                if(onlySingleLettered){
                    return this.breakNames(name, matches[0]);
                }
            }
        });
    }
}
