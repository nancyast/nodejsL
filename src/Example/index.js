let studentA = {
  name: 'A'
};

const studentB = studentA;

studentA.name = 'B';

console.log(studentB);
