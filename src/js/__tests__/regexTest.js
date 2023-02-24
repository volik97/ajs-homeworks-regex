import Validator from "../regex";

test("Проверка на соблюдение всех условий", () => {
  const userName = new Validator();
  expect(userName.validateUsername("aa-_23asd")).toBeTruthy();
});

test("Число в начале строки", () => {
  const userName = new Validator();
  expect(userName.validateUsername("1aa-_23asd")).toBeFalsy();
});

test("Недопустимые символы", () => {
  const userName = new Validator();
  expect(userName.validateUsername("aa!-_23asd")).toBeFalsy();
});

test("Не латинские буквы", () => {
  const userName = new Validator();
  expect(userName.validateUsername("aaИИasd")).toBeFalsy();
});

test("4 цифры подряд", () => {
  const userName = new Validator();
  expect(userName.validateUsername("aa4444asd")).toBeFalsy();
});

test("Число в конце строки", () => {
  const userName = new Validator();
  expect(userName.validateUsername("aaasd1")).toBeFalsy();
});

test('Символ "_" в начале строки', () => {
  const userName = new Validator();
  expect(userName.validateUsername("_aaasd")).toBeFalsy();
});

test('Символ "_" в конце строки', () => {
  const userName = new Validator();
  expect(userName.validateUsername("aaasd_")).toBeFalsy();
});

test('Символ "-" в начале строки', () => {
  const userName = new Validator();
  expect(userName.validateUsername("-aaasd")).toBeFalsy();
});

test('Символ "-" в конце строки', () => {
  const userName = new Validator();
  expect(userName.validateUsername("aaasd-")).toBeFalsy();
});
