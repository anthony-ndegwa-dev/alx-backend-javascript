export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var taskBlock = true;
    var task2Block = false;
  }

  return [task, task2];
}
