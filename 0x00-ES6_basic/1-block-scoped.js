export default function taskBlock(trueOrFalse){
  const task = false;
  const task2 = true;

  if (trueOrFalse){
    let task = true;//let limits this o the if block scope
    let task = false;// let prevents overwrioting the outer const
  }

  return[task, task2]
}
