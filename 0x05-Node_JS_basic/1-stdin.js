// using node js for input and output via commandlie


process.stdin.on('readable',() => {
  const name = process.stdin.read();


  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

