// Exercise 02 · Conditionals
// Run: npm run test:02

/**
 * The classic! Return:
 *  "FizzBuzz" if n is divisible by 3 AND 5
 *  "Fizz"     if divisible by 3
 *  "Buzz"     if divisible by 5
 *  otherwise the number as a string ("7")
 */
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  }
  return n.toString();
}

/**
 * Convert a score (0–100) to a letter grade:
 *  90+ → "A", 80+ → "B", 70+ → "C", 60+ → "D", below 60 → "F"
 * If score is below 0, above 100, or not a number → "Invalid"
 */
export function grade(score) {
  if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
    return "Invalid";
  }
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  return "F";
}

/**
 * Use a `switch` statement.
 * "saturday" / "sunday" → "Weekend"
 * monday … friday       → "Weekday"
 * anything else         → "Unknown"
 * Must be case-insensitive: "SUNDAY" and "Sunday" both work.
 */
export function dayType(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return "Weekend";
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    default:
      return "Unknown";
  }
}

/**
 * Use a ternary (or two!).
 * Children under 12 pay 5, seniors 65 and over pay 7, everyone else pays 10.
 */
export function ticketPrice(age) {
  return age < 12 ? 5 : age >= 65 ? 7 : 10;
}

/**
 * Return the display name, falling back to "Anonymous"
 * when `nickname` is null or undefined.
 * BUT an empty string "" is a valid (if shy) nickname and should be returned as-is.
 * hint: which operator — || or ?? ?
 */
export function displayName(nickname) {
  return nickname ?? "Anonymous";

}

/**
 * Can this person rent a car?
 * They must be at least 21 AND have a license, OR be accompanied by a VIP member.
 * person = { age: number, hasLicense: boolean, withVip: boolean }
 */
export function canRentCar(person) {
  return (person.age >= 21 && person.hasLicense) || person.withVip;

}
