let students = [

    {
        id: 101,
        name: "Alice Johnson",
        age: 20,
        subjects: ["Math", "Physics", "Chemistry"],
        scores: [85, 90, 78]
    },

    {
        id: 102,
        name: "Bob Smith",
        age: 21,
        subjects: ["Math", "Physics", "Chemistry"],
        scores: [92, 88, 95]
    },

    {
        id: 103,
        name: "Charlie Brown",
        age: 19,
        subjects: ["Math", "Physics", "Biology"],
        scores: [78, 82, 85]
    },

    {
        id: 104,
        name: "Diana Prince",
        age: 20,
        subjects: ["Math", "Chemistry", "Biology"],
        scores: [95, 92, 89]
    },

    {
        id: 105,
        name: "Eve Davis",
        age: 22,
        subjects: ["Physics", "Chemistry", "Biology"],
        scores: [88, 85, 90]
    }

];


const validSubjects = new Set([
    "Math",
    "Physics",
    "Chemistry",
    "Biology"
]);


const tableBody =
    document.getElementById("student-table-body");

const resultOutput =
    document.getElementById("result-output");

const totalStudents =
    document.getElementById("total-students");

const classAverage =
    document.getElementById("class-average");

const gradeDistribution =
    document.getElementById("grade-distribution");


function calculateAverage(scores) {

    let total = scores.reduce(
        (sum, score) => sum + score,
        0
    );

    return (total / scores.length).toFixed(2);
}

function getGrade(avg) {

    avg = Number(avg);

    if (avg >= 90) {
        return "A";
    }

    else if (avg >= 80) {
        return "B";
    }

    else if (avg >= 70) {
        return "C";
    }

    else if (avg >= 60) {
        return "D";
    }

    else {
        return "F";
    }
}


function displayStudents(studentArray) {

    tableBody.innerHTML = "";

    studentArray.forEach(student => {

        let average =
            calculateAverage(student.scores);

        let grade =
            getGrade(average);

        let row = `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.age}</td>

                <td>${student.subjects.join(", ")}</td>

                <td>${student.scores.join(", ")}</td>

                <td>${average}</td>

                <td>${grade}</td>

                <td>
                    <button onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>

            </tr>
        `;

        tableBody.innerHTML += row;
    });

    updateStatistics();
}


function updateStatistics() {

    totalStudents.innerText =
        students.length;

    let allScores = [];

    students.forEach(student => {

        allScores.push(...student.scores);
    });

    let average =
        allScores.reduce((a, b) => a + b, 0)
        / allScores.length;

    classAverage.innerText =
        average.toFixed(2);

    let gradeMap = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };

    students.forEach(student => {

        let avg =
            calculateAverage(student.scores);

        let grade =
            getGrade(avg);

        gradeMap[grade]++;
    });

    gradeDistribution.innerText =
        `A:${gradeMap.A} 
         B:${gradeMap.B} 
         C:${gradeMap.C} 
         D:${gradeMap.D} 
         F:${gradeMap.F}`;
}


function addStudent() {

    let id =
        Number(document.getElementById("student-id").value);

    let name =
        document.getElementById("student-name").value;

    let age =
        Number(document.getElementById("student-age").value);

    let subjects =
        document.getElementById("student-subjects")
        .value
        .split(",");

    let scores =
        document.getElementById("student-scores")
        .value
        .split(",")
        .map(Number);

   
    let idExists =
        students.some(student => student.id === id);

    if (idExists) {

        alert("Student ID already exists");

        return;
    }

  
    if (age < 18 || age > 30) {

        alert("Age must be between 18 and 30");

        return;
    }

  
    for (let subject of subjects) {

        if (!validSubjects.has(subject.trim())) {

            alert("Invalid Subject");

            return;
        }
    }

    let newStudent = {
        id: id,
        name: name,
        age: age,
        subjects: subjects,
        scores: scores
    };

    students.push(newStudent);

    displayStudents(students);

    resultOutput.innerText =
        "Student Added Successfully";
}

function deleteStudent(id) {

    students =
        students.filter(student => student.id !== id);

    displayStudents(students);

    resultOutput.innerText =
        "Student Deleted";
}

function searchByName() {

    let searchText =
        document.getElementById("search-name")
        .value
        .toLowerCase();

    let filteredStudents =
        students.filter(student =>
            student.name
            .toLowerCase()
            .includes(searchText)
        );

    displayStudents(filteredStudents);
}

function filterByGrade() {

    let grade =
        document.getElementById("filter-grade")
        .value;

    if (grade === "") {

        displayStudents(students);

        return;
    }

    let filteredStudents =
        students.filter(student => {

            let avg =
                calculateAverage(student.scores);

            return getGrade(avg) === grade;
        });

    displayStudents(filteredStudents);
}

function filterBySubject() {

    let subject =
        document.getElementById("filter-subject")
        .value;

    if (subject === "") {

        displayStudents(students);

        return;
    }

    let filteredStudents =
        students.filter(student =>
            student.subjects.includes(subject)
        );

    displayStudents(filteredStudents);
}

function filterStudentsAbove85() {

    let filtered =
        students.filter(student =>
            student.scores.every(score => score > 85)
        );

    resultOutput.innerText =
        JSON.stringify(filtered, null, 2);
}

function sortByAverage() {

    let sorted =
        [...students].sort((a, b) => {

            let avgA =
                calculateAverage(a.scores);

            let avgB =
                calculateAverage(b.scores);

            return avgB - avgA;
        });

    displayStudents(sorted);

    resultOutput.innerText =
        "Students Sorted By Average";
}

function highestScoreBySubject() {

    let subjectMap = new Map();

    students.forEach(student => {

        student.subjects.forEach((subject, index) => {

            let score =
                student.scores[index];

            if (
                !subjectMap.has(subject) ||
                score > subjectMap.get(subject)
            ) {
                subjectMap.set(subject, score);
            }
        });
    });

    resultOutput.innerText =
        JSON.stringify(
            Object.fromEntries(subjectMap),
            null,
            2
        );
}

function generateLeaderboard() {

    let leaderboard =
        [...students].sort((a, b) => {

            return calculateAverage(b.scores)
                - calculateAverage(a.scores);
        });

    let result = "";

    leaderboard.forEach((student, index) => {

        let avg =
            calculateAverage(student.scores);

        let grade =
            getGrade(avg);

        result += `
Rank ${index + 1}: 
${student.name} 
(${avg}) 
- Grade ${grade}

`;
    });

    resultOutput.innerText = result;
}

function showUniqueSubjects() {

    let subjectSet = new Set();

    students.forEach(student => {

        student.subjects.forEach(subject => {

            subjectSet.add(subject);
        });
    });

    resultOutput.innerText =
        Array.from(subjectSet).join(", ");
}

function groupStudentsByGrade() {

    let gradeMap = new Map();

    students.forEach(student => {

        let avg =
            calculateAverage(student.scores);

        let grade =
            getGrade(avg);

        if (!gradeMap.has(grade)) {

            gradeMap.set(grade, []);
        }

        gradeMap.get(grade).push(student.name);
    });

    resultOutput.innerText =
        JSON.stringify(
            Object.fromEntries(gradeMap),
            null,
            2
        );
}

function mergeStudentRecords() {

    let array1 = students;

    let array2 = [

        {
            id: 101,
            name: "Alice Johnson",
            age: 20,
            subjects: ["Math"],
            scores: [95]
        },

        {
            id: 106,
            name: "Frank Miller",
            age: 23,
            subjects: ["Biology"],
            scores: [80]
        }

    ];

    let mergedMap = new Map();

    [...array1, ...array2].forEach(student => {

        let avg =
            calculateAverage(student.scores);

        if (!mergedMap.has(student.id)) {

            mergedMap.set(student.id, student);
        }

        else {

            let existing =
                mergedMap.get(student.id);

            let existingAvg =
                calculateAverage(existing.scores);

            if (avg > existingAvg) {

                mergedMap.set(student.id, student);
            }
        }
    });

    let mergedArray =
        Array.from(mergedMap.values());

    resultOutput.innerText =
        JSON.stringify(mergedArray, null, 2);
}

document
    .getElementById("add-student-btn")
    .addEventListener("click", addStudent);

document
    .getElementById("search-name")
    .addEventListener("keyup", searchByName);

document
    .getElementById("filter-grade")
    .addEventListener("change", filterByGrade);

document
    .getElementById("filter-subject")
    .addEventListener("change", filterBySubject);

const operationButtons =
    document.querySelectorAll(
        ".analysis-section button"
    );

operationButtons[0]
    .addEventListener(
        "click",
        filterStudentsAbove85
    );

operationButtons[1]
    .addEventListener(
        "click",
        sortByAverage
    );

operationButtons[2]
    .addEventListener(
        "click",
        highestScoreBySubject
    );

operationButtons[3]
    .addEventListener(
        "click",
        generateLeaderboard
    );

operationButtons[4]
    .addEventListener(
        "click",
        highestScoreBySubject
    );

operationButtons[5]
    .addEventListener(
        "click",
        showUniqueSubjects
    );

operationButtons[6]
    .addEventListener(
        "click",
        groupStudentsByGrade
    );

operationButtons[7]
    .addEventListener(
        "click",
        mergeStudentRecords
    );

displayStudents(students);