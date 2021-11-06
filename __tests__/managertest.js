const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number", () => {
  const testValue = 101;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 101);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 101;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});