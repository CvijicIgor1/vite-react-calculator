import type { Operacije, Operacije_Rez } from "../Kalkulator_Tip/Operacije";

export function kalkulator_racunica(
    broj1: number,
    broj2: number,
    operacija: Operacije
): Operacije_Rez {

    switch (operacija) {
        case 'zbir':
            return { broj: broj1 + broj2 };
        case 'oduzimanje':
            return { broj: broj1 - broj2 };
        case 'mnozenje':
            return { broj: broj1 * broj2 };
        case 'deljenje':
            if (broj2 === 0) 
            {
                return { greska: "Greska" };
            }
            return { broj: broj1 / broj2 };
        default:
            return { greska: "Greska" };
    }
}