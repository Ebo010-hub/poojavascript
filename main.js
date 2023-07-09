class LearningPath {

}

const escuelaWeb = new LearningPath();
const escuelaData = new LearningPath();

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
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const miguelito2 = new Student({
  name: "Michelon6",
  username: "michelon6",
  email: "michel@hotmail.com",
  instagram: "michelinsta",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});
