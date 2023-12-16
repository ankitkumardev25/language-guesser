import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

let input = process.argv[2];

const langCode = franc(input);
if (langCode === 'und') {
  console.log(
    'Could not understand what language that is.. please try again..!!'.red
  );
} else {
  const lang = langs.where('3', langCode);
  if (lang) {
    console.log(lang.name);
  } else {
    console.log(
      `error while finding out the language for this code ${langCode}`.red
    );
  }
}
