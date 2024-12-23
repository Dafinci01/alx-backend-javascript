// using node js for input and output via commandlie
//
process.stdin.on('readable',() => {
  const chunk  = process.stdin.read();


  if(chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

