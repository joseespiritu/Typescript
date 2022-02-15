"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: ' Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.133131
    };
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision);
        console.log(resto);
    };
    const avengersArr = ['Cap. Ámerica', true, false];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: ' Armorsuit'
    };
    const captainAmerica = {
        name: 'Capitán América',
        weapon: 'shield'
    };
    const thor = {
        name: 'Thor',
        weapon: ' Mjolnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
    }
})();
(() => {
    const nombre = 'Jose';
    const getName = () => {
        console.log('Nuevo getName');
    };
    const heroe = {
        a: 1,
        b: 2
    };
    heroe.b = 100;
})();
//# sourceMappingURL=main.js.map