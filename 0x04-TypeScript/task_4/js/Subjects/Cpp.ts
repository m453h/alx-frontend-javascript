import { Subjects as s } from "./Subject";
import { Subjects as t } from "./Teacher";

namespace Subjects {
  export interface Teacher extends t.Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends s.Subject {

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      
      if (this.teacher && this.teacher.experienceTeachingC !== undefined) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

export const cpp =  new Subjects.Cpp();

export const cTeacher: Subjects.Teacher = {
  firstName: "Michael",
  lastName: "Hudson",
  experienceTeachingC: 10,
};
