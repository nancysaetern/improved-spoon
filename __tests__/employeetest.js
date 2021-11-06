const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
  const name = "Taylor";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id", () => {
  const testValue = 1;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "taylor@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name", () => {
  const testValue = "Taylor";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id", () => {
  const testValue = 1;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email", () => {
  const testValue = "taylor@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Taylor", 1, "taylor@test.com");
  expect(e.getRole()).toBe(testValue);
});