// Safety Goggles ON
'use strict';

// Require modules
const greet = require('./lib/greet');
const arithmetic = require('./lib/arithmetic');
const faker = require('faker');

// Setup Variables
let randomName = faker.name.findName();

// Test 1
test('outputs as string', () => {
  expect(greet(randomName)).toBe(typeof randomName === 'string');
});

// Test 2
test('hello world', () => {
  expect(greet(world)).toBe('Hello world');
});