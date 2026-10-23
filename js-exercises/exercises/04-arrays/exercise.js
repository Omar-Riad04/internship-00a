// Exercise 04 · Arrays
// Use array methods (map, filter, reduce, find, ...) — no for loops!
// Run: npm run test:04

/*
 * Most functions receive a list of products like this:
 * [
 *   { name: "Laptop", price: 1200, qty: 2, category: "tech", inStock: true },
 *   { name: "Mug",    price: 8,    qty: 0, category: "home", inStock: false },
 *   ...
 * ]
 */

/** Return an array of just the product names. */
export function getNames(products) {
  return products.map(product => product.name);
}

/** Return only the products that are in stock. */
export function getInStock(products) {
  return products.filter(product => product.inStock);
}

/** Return the total inventory value: sum of price × qty for every product. */
export function totalValue(products) {
  return products.reduce((total, product) => total + product.price * product.qty, 0);
}

/** Return the product with this exact name, or undefined. */
export function findByName(products, name) {
  return products.find(product => product.name === name);
}

/**
 * Return a NEW array sorted by price, cheapest first.
 * The original array must NOT be changed.
 */
export function sortByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

/** Return the names of in-stock products in `category`, in UPPERCASE. (chain them!) */
export function inStockNamesIn(products, category) {
  return products
    .filter(product => product.inStock && product.category === category)
    .map(product => product.name.toUpperCase());
}

/**
 * Group products by category:
 * { tech: ["Laptop", "Phone"], home: ["Mug"] }
 * hint: reduce with an object as the starting value
 */
export function groupByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product.name);
    return acc;
  }, 
  {}
  )
}

/** Remove duplicates. unique([1, 2, 2, 3, 1]) → [1, 2, 3] */
export function unique(items) {
  return [...new Set(items)];
}

/**
 * Split an array into chunks of `size`.
 * chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
 * (You may use Array.from or a loop for this one 🙂)
 */
export function chunk(items, size) {
  
  
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
   items.slice(i * size, i * size + size)

  )
  
}
