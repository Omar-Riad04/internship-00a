// Exercise 06 · Strings & Loops
// Run: npm run test:06

/** capitalize("hELLO") → "Hello" */
export function capitalize(word) {
  if (!word) return "";
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/** titleCase("the lord of the rings") → "The Lord Of The Rings" */
export function titleCase(sentence) {
  return sentence
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");
}

/**
 * Ignore case, spaces and punctuation.
 * isPalindrome("A man, a plan, a canal: Panama!") → true
 * isPalindrome("hello") → false
 */
export function isPalindrome(text) {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = clean.split("").reverse().join("");
  return clean === reverse;
}

/** Count vowels (a, e, i, o, u — any case). Use a for...of loop. */
export function countVowels(text) {
  let count = 0;
  for (const char of text.toLowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  return count;
}

/**
 * Shorten long text. If text is longer than `max`, cut it and add "..."
 * so the TOTAL length is exactly `max`. Otherwise return it unchanged.
 * truncate("Hello world", 8) → "Hello..."
 * truncate("Hi", 8)          → "Hi"
 */
export function truncate(text, max) {
  if (text.length > max) {
    return text.slice(0, max - 3) + "...";
  }
  return text;

}

/**
 * Build a multiplication table as an array of strings.
 * multiplicationTable(3, 4) → ["3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9", "3 x 4 = 12"]
 */
export function multiplicationTable(n, upTo) {
  const table = [];
  for (let i = 1; i <= upTo; i++) {
    table.push(`${n} x ${i} = ${n * i}`);
  }
  return table;
}

/**
 * Return the first word that appears twice, or null.
 * Use a loop with `break` or early `return`, and a Set to remember what you've seen.
 * firstRepeatedWord("I think therefore I am") → "I"
 */
export function firstRepeatedWord(sentence) {
  const words = sentence.split(" ");
  const seen = new Set();

  for (const word of words) {
    if (seen.has(word)) {
      return word;
    }
    seen.add(word);
  }
  return null;
}

/**
 * Compress repeated letters:  "aaabccdddd" → "a3bc2d4"
 * (a letter appearing once has no number)
 */
export function compress(text) {
  if (!text) return "";
  let result = "";
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      result += text[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return result;
}