const students = [];

function addStudent(name, grade) {
    students.push({
        name,
        grade,
    });
}

function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if(index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed")


    } else {
        console.log(name, "was not found")
    }

}

function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);

}

function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`)
}

console.log("students =", students);

addStudent("Alice", 85);
addStudent("Andrew", 90);
addStudent("Bob", 75);
addStudent("Charles", 78);
addStudent("Carl", 55);
console.log("Student List:")
console.log(formatStudentList());

removeStudent("Charles");
console.log(formatStudentList());
console.log("Students with Grade equal to or higher than 80")
console.log(filterTopStudents(80));