const fs = require('fs');
let c = fs.readFileSync('index.js', 'utf8');

// The pattern is:
// ]
// },
// (any amount of whitespace or nested arrays/objects that don't start a new slug)
// 'slug': {
// We can match `]\n},` followed by anything that IS NOT ` 'slug': { ` up to the next ` 'slug': { `.

let chunks = c.split(/\n  '([a-z0-9-]+)': {\n/g);
// chunks[0] is the prefix up to the first slug
// Then pairs of (slug, block)
let newContent = chunks[0];

for (let i = 1; i < chunks.length; i += 2) {
  let slug = chunks[i];
  let block = chunks[i+1];
  
  // A valid block ends with `    ]\n}` or just `}` if there's no faq.
  // We want to truncate any garbage at the end of the block.
  // The block ends with the last `}` or `]\n}` before the end of the string.
  // Let's find the first `]\n}` and discard the rest.
  // Wait, if faq exists, it ends with `\n    ]\n}`.
  
  let endIdx = block.indexOf(']\n}');
  if (endIdx !== -1) {
    block = block.substring(0, endIdx + 3);
  } else {
    // If no faq, it ends with `\n}`. Let's find the first `\n}`.
    let altEnd = block.indexOf('\n}');
    if (altEnd !== -1) {
      block = block.substring(0, altEnd + 2);
    }
  }
  
  newContent += `\n  '${slug}': {\n${block},`;
}

// Remove the last comma if needed, but it's fine.
newContent = newContent.replace(/,$/, '\n};\n\n// ════');

// Let's just fix the trailing garbage by replacing it correctly.
fs.writeFileSync('index.js.fixed', newContent);
console.log('Done!');
