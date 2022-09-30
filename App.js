import { useState } from "react";
// import './App.css';

function App() {
    const appState = {
        semesters: [
            {
                courses: [
                    {
                        name: "Math",
                        credits: 3,
                        grade: "A",
                    },
                    {
                        name: "English",
                        credits: 3,
                        grade: "B",
                    },
                    {
                        name: "History",
                        credits: 3,
                        grade: "C",
                    },
                ],
            },
        ],
    };
    
    const combineCourses = (semesters) => {
        return semesters.reduce((acc, semester) => {
            return acc.concat(semester.courses);
        }, []);
    };
    
    const calculateGPA = (courses) => {
        const total = courses.reduce((acc, course) => {
            return acc + course.credits;
        }, 0);
        // Use this for weighted GPA
        // const weighted = courses.reduce((acc, course) => {
        //     return acc + course.credits * course.grade;
        // }, 0);
    
        // return weighted / total;
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newSemesters = [...semesters];
        newSemesters[index][name] = value;
        setSemesters(newSemesters);
    }

    const handleRemoveClick = (index) => {
        const newSemesters = [...semesters];
        newSemesters.splice(index, 1);
        setSemesters(newSemesters);
    }

    const handleAddClick = () => {
        setSemesters([...semesters, { name: "", grade: "" }]);
    }

    const [semesters, setSemesters] = useState([{ name: "", grade: "" }]);

    // const [courses, setCourses] = useState(combineCourses(semesters));

    const [gpa, setGPA] = useState(calculateGPA(0));
    
    return (
        <div>
          <h1>Semester 1</h1>
            {semesters.map((course, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="course"
                        value={course.course}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <input
                        type="text"
                        name="grade"
                        value={course.grade}
                        onChange={(e) => handleChange(e, index)}
                        // Dropdown menu for grade
                    />
                    <input
                        type="text"
                        name="credits"
                        value={course.credits}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <button onClick={() => {
                        const newSemesters = [...semesters];
                        newSemesters.splice(index, 1);
                        setSemesters(newSemesters);
                    }
                    }>
                        Remove
                    </button>
                </div>

            ))}
            <button onClick={combineCourses}>
                Add Course
            </button>
            <div>
                <h3>Total GPA: {gpa}</h3>
            </div>
        </div>
    );
    }

export default App;















































// import { useState } from "react";
// // import './App.css';

// function App() {
//   const appState = {
//     semesters: [
//         {
//             courses: [
//                 {
//                     name: "Math",
//                     credits: 3,
//                     grade: "A",
//                 },
//                 {
//                     name: "English",
//                     credits: 3,
//                     grade: "B",
//                 },
//                 {
//                     name: "History",
//                     credits: 3,
//                     grade: "C",
//                 },
//             ],
//         },
//     ],

    




















// //   // i need a conditional statement (if/else or switch statement) for each grade point

// //   const gradeMap = {
// //   A: 4.0,
// //   B: 3.0,
// //   C: 2.0,
// //   D: 1.0,
// //   F: 0.0
// //   }

// // const gradePoint = (grade) => {
// //   if (gradeMap[grade]) {
// //     return gradeMap[grade];
// //   }
// //   return 0.0;
// // }

// //     // GPA formula is (grades*credits)/credits = gpa
// // const divideWithoutNaN = (a, b) => {
// //     if (b === 0) {
// //         return 0;
// //     }
// //     return a / b;
// // }




// //     const calculateGpa = () => {
// //         let totalGradePoints = 0;
// //         let totalCredits = 0;
// //         courses.forEach((course) => {
// //             const courseCredits = course.credits || 0;
// //             const courseGrade = gradePoint(course.grade) || 0;
// //             const gpaMultiplier = courseGrade * courseCredits;
// //             const gpaDivide = divideWithoutNaN(gpaMultiplier, courseCredits);
// //             totalGradePoints += gpaMultiplier;
        
// //             // i need to multiply the grade point by the credits
// //             totalCredits += courseCredits;
// //         });
// //         const calcGpaFromNaN = divideWithoutNaN(totalGradePoints, totalCredits);
// //         setTotalGpa(calcGpaFromNaN);
// //     }
    

//     // const handleChange = (e, index) => {
//     //   console.log(e.target.name, index)
//     //     const newCourses = [...courses];
//     //     newCourses[index][e.target.name] = e.target.value;
//     //     setCourses(newCourses);
//     //     calculateGpa();
//     // }

// //     return (
// //         <div>
// //           <h1>Semester 1</h1>
// //             {courses.map((course, index) => (
// //                 <div key={index}>
// //                     <input
// //                         type="text"
// //                         name="course"
// //                         value={course.course}
// //                         onChange={(e) => handleChange(e, index)}
// //                     />
// //                     <input
// //                         type="text"
// //                         name="grade"
// //                         value={course.grade}
// //                         onChange={(e) => handleChange(e, index)}
// //                         // Dropdown menu for grade
// //                     />
// //                     <input
// //                         type="text"
// //                         name="credits"
// //                         value={course.credits}
// //                         onChange={(e) => handleChange(e, index)}
// //                     />
// //                     <button onClick={() => {
// //                         const newCourses = [...courses];
// //                         newCourses.splice(index, 1);
// //                         setCourses(newCourses);
// //                     }
// //                     }>
// //                         Remove
// //                     </button>
// //                 </div>

// //             ))}
// //             <button onClick={addCourse}>
// //                 Add Course
// //             </button>
// //             <button onClick={addSemester}>
// //                 Add Semester 
// //             </button>
// //             <div>
// //                 <h3>Total GPA: {totalGpa}</h3>
// //             </div>
// //         </div>
// //     );
// }

// }
