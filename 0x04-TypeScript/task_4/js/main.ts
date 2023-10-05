import { cpp, cTeacher } from "./Subjects/Cpp";
import { java } from  "./Subjects/Java";
import { react } from  "./Subjects/React";

cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());