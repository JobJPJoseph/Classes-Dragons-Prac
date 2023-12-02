// Your code here
const FriendlyDragon = require('./classes/friendly-dragon');
const falkor = new FriendlyDragon('Falkor', 'white', [
  "save Atreyu from the swamp",
  "save Atreyu from the Nothing",
  "scare the local bullies into a dumpster",
], 'Bastian');

const EvilDragon = require('./classes/evil-dragon');
const smaug = new EvilDragon('Smaug', 'black', [
  "take over your mountain kingdom",
  "steal all your dwarven gold",
  "burn down your floating village",
], 'Dwarf King')

const allDragons = [falkor.name, smaug.name];
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor,
  module.exports.smaug = smaug,
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
