import max from "../assets/max.png"
import hak from "../assets/hak.png"
import nik from "../assets/nik.png"
import thu from "../assets/thugether.png"
import yul from "../assets/yulia.png"

export function genDeck(items = vowels) {

  let duplicated = items.concat([...items]);

  let shuffled = duplicated.sort(() => Math.random() - 0.5);
  return shuffled;
}

export function alphabet(amount = 26) {
  return [...Array(amount)]
    .map((n,i) => String.fromCharCode(97+i));
}

export const vowels = [max,hak,nik,thu,yul];
