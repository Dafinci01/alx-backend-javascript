//proces stdout.write to display to the screen
process.stdout.write('Welcome to Alx, what is your name?\n');
//process stdin.on to read and receive input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
