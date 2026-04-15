class Course {
constructor(courseName, instructor) {
this.courseName = courseName;
this.instructor = instructor;
}

displayCourse() {
return `Course: ${this.courseName}
Instructor: ${this.instructor}`;
}
}

let course1 = new Course("Web Technologies", "Dr. Kumar");

document.getElementById("course").innerText = course1.displayCourse();

let enrollCourse = new Promise((resolve, reject) => {
let seatsAvailable = true;
seatsAvailable ? resolve("Enrollment Successful") : reject("Course Full");
});

enrollCourse
.then(msg => document.getElementById("status").innerText = msg)
.catch(err => document.getElementById("status").innerText = err);