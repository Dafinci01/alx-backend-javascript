// using node js for input and output via commandlie


process.stdin.on('readable', () => {
  const name = process.stdin.read();


  if (name && name.trim()) {
    process.stdout.write(`Your name is: ${name.trim()}\n`);
    else {
      process.stdout.write("Name cannot be empty. Please try again: \n');
    }
  });

