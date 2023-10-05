import { Subjects as t } from "./Teacher";

export namespace Subjects {
  export class Subject {
    teacher: t.Teacher | undefined;

    set setTeacher(teacher: t.Teacher) {
      this.teacher = teacher;
    }

  }
}
