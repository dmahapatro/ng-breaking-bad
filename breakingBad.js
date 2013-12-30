angular.module('breakingBad', [])
    .controller("bbCtrl", ['$scope', 'PeriodicTableService', function ($scope) {
        $scope.bb = {firstName: '', lastName: ''};
    }])
    .directive('ngBreakingBad', function (PeriodicTableService) {
        return{
            scope: {
                first: '=',
                last: '='
            },
            restrict: "AE",
            replace: true,
            templateUrl: 'breakingBadName.html',
            link: function (scope, element) {
                var periodicTable = PeriodicTableService.periodicTable;
                scope.$watch('first', function () {
                    scope.styledFirst = findMatches(scope.first);
                });

                scope.$watch('last', function () {
                    scope.styledLast = findMatches(scope.last);
                });

                function findMatches(name) {
                    var matches = [];
                    $.grep(periodicTable, function (elem, index) {
                        var symbol = elem.symbol;
                        var atomicNum = elem.atomicNum;
                        var elemName = elem.name;
                        if (name.toLowerCase().indexOf(symbol.toLowerCase()) != -1) {
                            matches.push({symbol: symbol, atomicNum: atomicNum, elemName: elemName});
                        }
                    });

                    if (matches) {
                        var onlySingleLettered = false;
                        for (i = 0; i < matches.length; i++) {
                            if (matches[i].symbol.length > 1) {
                                onlySingleLettered = false;
                                return breakNames(name, matches[i]);
                            } else {
                                //If you want to give priority to single letter
                                /*if(matches[i].atomicNum < 20 && matches[i].atomicNum != 1){
                                    return breakNames(name, matches[i]);
                                }*/
                                onlySingleLettered = true;
                            }
                        }

                        if(onlySingleLettered){
                            return breakNames(name, matches[0]);
                        }
                    }
                }

                function breakNames(name, match){
                    var indexOfMatch = name.toLowerCase().indexOf(match.symbol.toLowerCase());
                    var firstPart = name.substr(0, indexOfMatch);
                    var lastPart = name.substr(indexOfMatch + match.symbol.length);
                    var transform = firstPart + match.symbol + lastPart;
                    return {
                        transform: transform,
                        firstPart: firstPart,
                        lastPart: lastPart,
                        match: match.symbol,
                        atomicNum: match.atomicNum,
                        elemName: match.elemName
                    }
                }
            }
        };
    })
    .factory("PeriodicTableService", function () {
        function getPeriodicTable() {
            return [
                {name: "Hydrogen", symbol: "H", atomicNum: 1},
                {name: "Helium", symbol: "He", atomicNum: 2},
                {name: "Lithium", symbol: "Li", atomicNum: 3},
                {name: "Beryllium", symbol: "Be", atomicNum: 4},
                {name: "Boron", symbol: "B", atomicNum: 5},
                {name: "Carbon", symbol: "C", atomicNum: 6},
                {name: "Nitrogen", symbol: "N", atomicNum: 7},
                {name: "Oxygen", symbol: "O", atomicNum: 8},
                {name: "Fluorine", symbol: "F", atomicNum: 9},
                {name: "Neon", symbol: "Ne", atomicNum: 10},
                {name: "Sodium", symbol: "Na", atomicNum: 11},
                {name: "Magnesium", symbol: "Mg", atomicNum: 12},
                {name: "Aluminium", symbol: "Al", atomicNum: 13},
                {name: "Silicon", symbol: "Si", atomicNum: 14},
                {name: "Phosphorus", symbol: "P", atomicNum: 15},
                {name: "Sulphur", symbol: "S", atomicNum: 16},
                {name: "Chlorine", symbol: "Cl", atomicNum: 17},
                {name: "Argon", symbol: "Ar", atomicNum: 18},
                {name: "Potassium", symbol: "K", atomicNum: 19},
                {name: "Calcium", symbol: "Ca", atomicNum: 20},
                {name: "Scandium", symbol: "Sc", atomicNum: 21},
                {name: "Titanium", symbol: "Ti", atomicNum: 22},
                {name: "Vanadium", symbol: "V", atomicNum: 23},
                {name: "Chromium", symbol: "Cr", atomicNum: 24},
                {name: "Manganese", symbol: "Mn", atomicNum: 25},
                {name: "Iron", symbol: "Fe", atomicNum: 26},
                {name: "Cobalt", symbol: "Co", atomicNum: 27},
                {name: "Nickel", symbol: "Ni", atomicNum: 28},
                {name: "Copper", symbol: "Cu", atomicNum: 29},
                {name: "Zinc", symbol: "Zn", atomicNum: 30},
                {name: "Gallium", symbol: "Ga", atomicNum: 31},
                {name: "Germanium", symbol: "Ge", atomicNum: 32},
                {name: "Arsenic", symbol: "As", atomicNum: 33},
                {name: "Selenium", symbol: "Se", atomicNum: 34},
                {name: "Bromine", symbol: "Br", atomicNum: 35},
                {name: "Krypton", symbol: "Kr", atomicNum: 36},
                {name: "Rubidium", symbol: "Rb", atomicNum: 37},
                {name: "Strontium", symbol: "Sr", atomicNum: 38},
                {name: "Yttrium", symbol: "Y", atomicNum: 39},
                {name: "Zirconium", symbol: "Zr", atomicNum: 40},
                {name: "Niobium", symbol: "Nb", atomicNum: 41},
                {name: "Molybdenum", symbol: "Mo", atomicNum: 42},
                {name: "Technetium", symbol: "Tc", atomicNum: 43},
                {name: "Ruthenium", symbol: "Ru", atomicNum: 44},
                {name: "Rhodium", symbol: "Rh", atomicNum: 45},
                {name: "Palladium", symbol: "Pd", atomicNum: 46},
                {name: "Silver", symbol: "Ag", atomicNum: 47},
                {name: "Cadmium", symbol: "Cd", atomicNum: 48},
                {name: "Indium", symbol: "In", atomicNum: 49},
                {name: "Tin", symbol: "Sn", atomicNum: 50},
                {name: "Antimony", symbol: "Sb", atomicNum: 51},
                {name: "Tellurium", symbol: "Te", atomicNum: 52},
                {name: "Iodine", symbol: "I", atomicNum: 53},
                {name: "Xenon", symbol: "Xe", atomicNum: 54},
                {name: "Caesium", symbol: "Cs", atomicNum: 55},
                {name: "Barium", symbol: "Ba", atomicNum: 56},
                {name: "Lanthanum", symbol: "La", atomicNum: 57},
                {name: "Cerium", symbol: "Ce", atomicNum: 58},
                {name: "Praseodymium", symbol: "Pr", atomicNum: 59},
                {name: "Neodymium", symbol: "Nd", atomicNum: 60},
                {name: "Promethium", symbol: "Pm", atomicNum: 61},
                {name: "Samarium", symbol: "Sm", atomicNum: 62},
                {name: "Europium", symbol: "Eu", atomicNum: 63},
                {name: "Gadolinium", symbol: "Gd", atomicNum: 64},
                {name: "Terbium", symbol: "Tb", atomicNum: 65},
                {name: "Dysprosium", symbol: "Dy", atomicNum: 66},
                {name: "Holmium", symbol: "Ho", atomicNum: 67},
                {name: "Erbium", symbol: "Er", atomicNum: 68},
                {name: "Thulium", symbol: "Tm", atomicNum: 69},
                {name: "Ytterbium", symbol: "Yb", atomicNum: 70},
                {name: "Lutetium", symbol: "Lu", atomicNum: 71},
                {name: "Hafnium", symbol: "Hf", atomicNum: 72},
                {name: "Tantalum", symbol: "Ta", atomicNum: 73},
                {name: "Tungsten", symbol: "W", atomicNum: 74},
                {name: "Rhenium", symbol: "Re", atomicNum: 75},
                {name: "Osmium", symbol: "Os", atomicNum: 76},
                {name: "Iridium", symbol: "Ir", atomicNum: 77},
                {name: "Platinum", symbol: "Pt", atomicNum: 78},
                {name: "Gold", symbol: "Au", atomicNum: 79},
                {name: "Mercury", symbol: "Hg", atomicNum: 80},
                {name: "Thallium", symbol: "Tl", atomicNum: 81},
                {name: "Lead", symbol: "Pb", atomicNum: 82},
                {name: "Bismuth", symbol: "Bi", atomicNum: 83},
                {name: "Polonium", symbol: "Po", atomicNum: 84},
                {name: "Astatine", symbol: "At", atomicNum: 85},
                {name: "Radon", symbol: "Rn", atomicNum: 86},
                {name: "Francium", symbol: "Fr", atomicNum: 87},
                {name: "Radium", symbol: "Ra", atomicNum: 88},
                {name: "Actinium", symbol: "Ac", atomicNum: 89},
                {name: "Thorium", symbol: "Th", atomicNum: 90},
                {name: "Protactinium", symbol: "Pa", atomicNum: 91},
                {name: "Uranium", symbol: "U", atomicNum: 92},
                {name: "Neptunium", symbol: "Np", atomicNum: 93},
                {name: "Plutonium", symbol: "Pu", atomicNum: 94},
                {name: "Americium", symbol: "Am", atomicNum: 95},
                {name: "Curium", symbol: "Cm", atomicNum: 96},
                {name: "Berkelium", symbol: "Bk", atomicNum: 97},
                {name: "Californium", symbol: "Cf", atomicNum: 98},
                {name: "Einsteinium", symbol: "Es", atomicNum: 99},
                {name: "Fermium", symbol: "Fm", atomicNum: 100},
                {name: "Mendelevium", symbol: "Md", atomicNum: 101},
                {name: "Nobelium", symbol: "No", atomicNum: 102},
                {name: "Lawrencium", symbol: "Lr", atomicNum: 103}
            ];
        }

        return{
            periodicTable: getPeriodicTable()
        }
    });