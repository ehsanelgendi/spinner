process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinChar = "|/-\\-\\|";
let delay = 100;
for (const char of spinChar) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, delay);
  delay += 200
}