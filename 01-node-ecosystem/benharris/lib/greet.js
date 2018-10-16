'use strict';

module.exports = (name) => {
  if(typeof name === 'string') {
    console.log(`hello ${name}`);
  } else {
    console.log(null);
  }
};