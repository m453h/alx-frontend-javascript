import { Subjects as s } from "./Subject";


namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends s.Subject {

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      
      if (this.teacher && this.teacher.experienceTeachingReact !== undefined) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

export const react = new Subjects.React();
