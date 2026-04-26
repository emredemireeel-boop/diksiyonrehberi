const content = 'sestir.\\n\\n<h3>';
console.log('Original:', content);
console.log('Replaced with 2 slashes:', content.replace(/\\n/g, ''));
console.log('Replaced with 4 slashes:', content.replace(/\\\\n/g, ''));
