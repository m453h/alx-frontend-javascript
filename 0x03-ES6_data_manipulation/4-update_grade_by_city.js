export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (Array.isArray(studentList)) {

    return studentList.filter((student) => student.location === city)
      .map((student) => ({ ...student, grade: (newGrades.filter((grade) => grade.studentId === student.id)[0] || { grade: 'N/A' }).grade }));
  }

  return [];
}
