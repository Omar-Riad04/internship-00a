// Exercise 05 · Objects
// Run: npm run test:05

/**
 * Use DESTRUCTURING in the parameter list.
 * getFullName({ firstName: "Ada", lastName: "Lovelace" }) → "Ada Lovelace"
 */
export function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

/**
 * Return a NEW user object with `changes` applied.
 * The original user must NOT be modified.
 * updateUser({ name: "Ada", age: 36 }, { age: 37 }) → { name: "Ada", age: 37 }
 */
export function updateUser(user, changes) {
  return { ...user, ...changes };
}

/**
 * Count how many times each word appears (case-insensitive).
 * countWords("the cat and THE hat") → { the: 2, cat: 1, and: 1, hat: 1 }
 * hint: .toLowerCase(), .split(" "), and an object as a tally
 */
export function countWords(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const tally = {};

  for (const word of words) {
    tally[word] = (tally[word] || 0) + 1;
  }
  return tally;
}

/**
 * Swap keys and values.
 * invert({ a: "x", b: "y" }) → { x: "a", y: "b" }
 * hint: Object.entries + map + Object.fromEntries
 */
export function invert(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  )
}

/**
 * Safely read the user's city. Return "Unknown" if any part is missing.
 * getCity({ address: { city: "Cairo" } }) → "Cairo"
 * getCity({})                             → "Unknown"
 * getCity(null)                           → "Unknown"
 * hint: ?. and ??
 */
export function getCity(user) {
  return user?.address?.city ?? "Unknown";
}

/**
 * Return an object with METHODS that use `this`:
 *  - owner             (string property)
 *  - balance           (number property, starts at 0)
 *  - deposit(amount)   adds to balance, returns new balance
 *  - withdraw(amount)  subtracts, returns new balance
 *                      throws new Error("Insufficient funds") if amount > balance
 *  - statement()       returns "<owner>: $<balance>"   e.g. "Ada: $50"
 */
export function createBankAccount(owner) {
  return {
    owner,
    balance: 0,
    deposit(amount) {
      this.balance += amount;
      return this.balance;
    },
    withdraw(amount) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      }
      this.balance -= amount;
      return this.balance;
    },
    statement() {
      return `${this.owner}: $${this.balance}`;
    },
  }
}
