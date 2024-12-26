// Colemak layout hand positions
export const leftHandKeys = ['q', 'w', 'f', 'p', 'g', 'a', 'r', 's', 't', 'd', 'z', 'x', 'c', 'v', 'b'];
export const rightHandKeys = ['j', 'l', 'u', 'y', ';', 'n', 'e', 'i', 'o', 'h', 'k', 'm', ',', '.', '/'];

// Common combinations by hand in Colemak
export const handCombinations = {
  left: {
    2: ['st', 'rs', 'ft', 'fs', 'ts', 'ds', 'sd', 'tf', 'sf', 'qt'],
    3: ['str', 'fst', 'tfs', 'sft', 'tsd', 'dst', 'qwf', 'wfp', 'pfs'],
    4: ['strf', 'tfsd', 'sftr', 'tfst', 'stfd', 'dsft', 'qwfp']
  },
  right: {
    2: ['en', 'ie', 'ne', 'ei', 'eo', 'oi', 'ih', 'he', 'iu', 'ui'],
    3: ['ien', 'ein', 'ine', 'eni', 'eio', 'oie', 'ihe', 'hei', 'uie'],
    4: ['iene', 'eine', 'enih', 'ienh', 'eoie', 'ihei', 'unie']
  },
  both: {
    2: ['te', 'si', 'de', 'ri', 'se', 'di', 'fe', 'ti', 'pe'],
    3: ['ste', 'tei', 'den', 'rei', 'sen', 'die', 'fen', 'tie'],
    4: ['sten', 'tein', 'deni', 'rein', 'seni', 'dien', 'feni']
  }
} as const;

export type Hand = 'left' | 'right' | 'both';
export type CombinationLength = 2 | 3 | 4;