/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher | undefined;

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
