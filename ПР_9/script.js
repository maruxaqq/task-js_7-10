

// const users = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 10,
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22,
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 22,
//   },
// ];

// const onlineUsers = users.filter((user) => user.status === "online");
// const usersOnlineNames = onlineUsers.map((user) => user.username).join(", ");
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);






// -------



// const order = [4, 2, 1, 3];
// const people = [
//   { id: 1, name: "Максим" },
//   { id: 2, name: "Николай" },
//   { id: 3, name: "Ангелина" },
//   { id: 4, name: "Виталий" },
// ]
// function giveTalonsInOrder (people, order); {
//     const sortedpeople = [];
//     for (const order of order) {
//     const people = people.find((p) => p.id === order);
//     if (people) {
//         sortedpeople.push(people);
//     }
//     }
// return sortedpeople
// }
// giveTalonsInOrder()



function giveJobToStudent(student, jobName) {
  student.job = jobName;
  const fullName = student.fullName;
  alert(
    `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`
  );
  return student;
}

const student = {
  fullName: "дима",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
alert("класс!", updatedStudent);
