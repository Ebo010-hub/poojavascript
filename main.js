class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelauno = new LearningPath({
    name: "Escuela 369",
    courses: [
      "curso 3",
      "curso 6",
      "curso 9",
    ],
  });
  
  const escuelados = new LearningPath({
    name: "Escuela 963",
    courses: [
      "curso 11",
      "curso 23",
      "curso 66",
    ],
  });
  

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}



const esteban33 = new Student({
  name: "esteban33",
  username: "ebo010",
  email: "ebo@gmail.com",
  twitter: "ebo010twitter",
  learningPaths: [escuelauno]
});

const michelon = new Student({
  name: "Michelon6",
  username: "michelon6",
  email: "michel@hotmail.com",
  instagram: "michelinsta",
  learningPaths: [escuelados],
});
