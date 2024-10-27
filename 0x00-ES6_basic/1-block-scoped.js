export default function taskBlock(trueOrFalse){
  const task = false;
  const task2 = true;

  if (trueOrFalse){
    const task = true;//let limits this o the if block scope
    const task = false;// let prevents overwrioting the outer const
  }

  return[task, task2]
}
