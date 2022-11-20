"use strict";
let regex = /\b([0-9][0-9]):[0-9][0-9]\b/g; // \b - sets word boundary modifier
let str = "Lunch at 10:10 in the room 123:456";
console.log(str.match(regex));
