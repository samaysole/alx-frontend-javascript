export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name
  get name() {
    return this.name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.name = value;
  }

  // length
  get length() {
    return this.length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = value;
  }

  // students
  get students() {
    return this.students;
  }

  set students(value) {
    value.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this.students = value;
  }
}
