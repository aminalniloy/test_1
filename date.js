const now = new Date();
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();

console.log(`Time zone: ${timeZone}`);
console.log(`Date: ${date}`);
console.log(`Time: ${time}`);
