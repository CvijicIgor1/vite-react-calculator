export interface Operacije_Rez {
    broj?: number;
    greska?: string;
}

export type Operacije = ('zbir' | 'oduzimanje' | 'mnozenje' | 'deljenje');