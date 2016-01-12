import {ELEMENTS} from './periodic-table-elements';
import {Injectable} from 'angular2/core';

@Injectable()
export class PeriodicTableService {
    getElements() {
        return Promise.resolve(ELEMENTS);
    }
}
