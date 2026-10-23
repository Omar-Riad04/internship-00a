// Exercise 07 · Async JavaScript
// Run: npm run test:07
import { getUser, getPosts, slowEndpoint } from "./api.js";

/**
 * Return a Promise that resolves (with no value) after `ms` milliseconds.
 * hint: new Promise(resolve => setTimeout(...))
 */
export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Use async/await. Return just the user's name.
 * await getUserName(1) → "Ada Lovelace"
 */
export async function getUserName(id) {
  const user = await getUser(id);
  return user.name;
}

/**
 * Return the user object with an extra `posts` property containing their posts.
 * await getUserWithPosts(1) → { id: 1, name: "Ada Lovelace", email: "...", posts: [ ... ] }
 * Bonus: can you fetch the user and posts IN PARALLEL?
 */
export async function getUserWithPosts(id) {
 const [user, posts] = await Promise.all([
    getUser(id),
    getPosts(id),
  ]);
  return { ...user, posts };
}

/**
 * Fetch several users IN PARALLEL (use Promise.all) and return their names.
 * await getManyNames([3, 1]) → ["Grace Hopper", "Ada Lovelace"]
 * Must be fast: 3 users should take ~50ms, not ~150ms.
 */
export async function getManyNames(ids) {
  const users = await Promise.all(ids.map(id => getUser(id)));
  return users.map(user => user.name);
}

/**
 * Like getUser, but NEVER throws. Return null if the user doesn't exist.
 * hint: try / catch
 */
export async function safeGetUser(id) {
  try {
    const user = await getUser(id);
    return user;
  } catch (error) {
    return null;
  }
}

/**
 * Call slowEndpoint(ms) but give up after `timeoutMs`.
 * If it's too slow, REJECT with Error("Timeout").
 * hint: Promise.race between the request and a promise that rejects after timeoutMs
 */
export async function withTimeout(ms, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), timeoutMs);
  });
  return Promise.race([slowEndpoint(ms), timeoutPromise]);
}

/**
 * Given ids (some may not exist), return a report:
 * { found: ["Ada Lovelace", ...], missing: [99, ...] }
 * Fetch in parallel. hint: Promise.allSettled keeps the order of ids.
 */
export async function fetchReport(ids) {
  const results = await Promise.allSettled(ids.map(id => getUser(id)));
  const found = [];
  const missing = [];

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      found.push(result.value.name);
    } else {
      missing.push(ids[index]);
    }
  });

  return { found, missing };
}