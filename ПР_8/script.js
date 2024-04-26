//1 задача

// const student = {
//   stack: ["HTML"],
//   level: 1,
//   improveLevel() {
//     let fullStack = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
//     if (this.level < 5) {
//       this.stack.push(fullStack[this.level]);
//       this.level++;
//     }
//     return this;
//   },
// };

// student.improveLevel().improveLevel().improveLevel().improveLevel();

// alert(student.stack);


//Задача 2

// function makeDomestic(isDomestic) {
//   alert(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return Object.assign({ isDomestic }, this);
// }
// const dog = {
//   name: "Чарли",
//   type: "Собака",
//   makeSound() {
//     return "Гав-Гав";
//   },
// };

// const bird = {
//   name: "Петя",
//   type: "Воробей",
//   makeSound() {
//     return "Чик-чирик";
//   },
// };

// let obj1 = makeDomestic.bind(dog)(true);
// console.log(obj1);
// let obj2 = makeDomestic.call(bird, false);
// console.log(obj2);
// let obj3 = makeDomestic.apply(bird, [false]);
// console.log(obj3);

//Задача 3

// const footballer = {
//   fullName: "Cristiano Ronaldo",
//   attack() {
//     alert(`${this.fullName} сейчас с мячом и начинает атаку!`);
//   },
//   scoreGoal(sound) {
//     alert(`${this.fullName} забил гол! Вот это да!`);
//     this.celebrate(sound);
//   },
//   celebrate(sound) {
//     alert(sound);
//   },
//   goToSubstitution: function (newPlayer) {
//     alert(
//       `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
//     );
//   },
// };

// const attack = footballer.attack;
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// const attackRon = attack.bind(footballer);
// attackRon();
// score.call(footballer, "goooooooooooool!!!");
// substitute.apply(footballer, ["Paulo Dibala"]);