/**
 * @typedef {Object} Customer
 * @property {Object} name - The name of the customer.
 * @property {string} name.first - The first name of the customer.
 * @property {string} [name.last] - The last name of the customer (optional).
 * @property {string} email - The email address of the customer.
 * @property {Date} dateOfBirth - The date of birth of the customer.
 * @property {number} customerId - A unique identifier for the customer.
 */
const customers = [
  {
    name: { first: "Alice", last: "Smith" },
    email: "alice.smith@example.com",
    dateOfBirth: new Date("1985-06-15"),
    customerId: 1,
  },
  {
    name: { first: "Bob", last: "Johnson" },
    email: "bob.johnson@example.com",
    dateOfBirth: new Date("1990-12-22"),
    customerId: 2,
  },
  {
    name: { first: "Charlie" },
    email: "charlie.brown@example.com",
    dateOfBirth: new Date("1978-03-30"),
    customerId: 3,
  },
  {
    name: { first: "Diana", last: "Prince" },
    email: "diana.prince@example.com",
    dateOfBirth: new Date("1992-10-09"),
    customerId: 4,
  },
  {
    name: { first: "Edward", last: "Norton" },
    email: "edward.norton@example.com",
    dateOfBirth: new Date("1980-01-25"),
    customerId: 5,
  },
];

export { customers };
