import {  useState } from "react";
import { listUserAccount } from "../Login/useLogin";

export const courseList = [
    {
        id: 1,
        courseCode: "MATH101",
        courseName: "Calculus I",
        credits: 3,
        professor: "Dr. Nguyen Van A",
        duration: "Sep 1, 2025 - Dec 15, 2025",
    },
    {
        id: 2,
        courseCode: "CS102",
        courseName: "Introduction to Programming",
        credits: 4,
        professor: "Ms. Tran Thi B",
        duration: "Sep 1, 2025 - Dec 10, 2025",
    },
    {
        id: 3,
        courseCode: "ENG103",
        courseName: "Academic English",
        credits: 2,
        professor: "Mr. Le Van C",
        duration: "Sep 1, 2025 - Nov 30, 2025",
    },
    {
        id: 4,
        courseCode: "PHY104",
        courseName: "Physics I",
        credits: 3,
        professor: "Dr. Pham Thi D",
        duration: "Sep 1, 2025 - Dec 5, 2025",
    },
    {
        id: 5,
        courseCode: "CHE105",
        courseName: "General Chemistry",
        credits: 3,
        professor: "Assoc. Prof. Vo Van E",
        duration: "Sep 1, 2025 - Dec 12, 2025",
    },
    {
        id: 6,
        courseCode: "HIS106",
        courseName: "Vietnamese History",
        credits: 2,
        professor: "Dr. Bui Thi F",
        duration: "Sep 10, 2025 - Dec 1, 2025",
    },
    {
        id: 7,
        courseCode: "ECO107",
        courseName: "Principles of Economics",
        credits: 3,
        professor: "Ms. Doan Van G",
        duration: "Sep 1, 2025 - Dec 20, 2025",
    },
    {
        id: 8,
        courseCode: "CS108",
        courseName: "Data Structures",
        credits: 4,
        professor: "Dr. Hoang Thi H",
        duration: "Sep 15, 2025 - Dec 25, 2025",
    },
];

export function DisplayCourses({ stylesProps }) {
    const userLogedIn = getCoursesByUser();

    const [selectedCourses, setSelectedCourses] = useState([]);

    function handleCheckboxChange(course) {
        const alreadySelected = selectedCourses.find(function (selected) {
            return selected.courseCode === course.courseCode;
        });

        if (alreadySelected) {
            const newSelectedCourses = selectedCourses.filter(function (selected) {
                return selected.courseCode !== course.courseCode;
            });
            setSelectedCourses(newSelectedCourses);
        } else {
            const newSelectedCourses = [...selectedCourses, course];
            setSelectedCourses(newSelectedCourses);
        }
    }

    function handleSubmit() {
        userLogedIn.courses = selectedCourses;
        console.log(userLogedIn.courses);
    }

    return (
        <div>
            {courseList.map(function (course, index) {
                const isChecked = selectedCourses.find(function (selected) {
                    return selected.courseCode === course.courseCode;
                });

                return (
                    <div key={index} className={stylesProps.courseInformationContainer}>
                        <div className={stylesProps.courseInformation}>{index + 1}</div>
                        <div className={stylesProps.courseInformation}>
                            {course.courseCode}
                        </div>
                        <div className={stylesProps.courseInformation}>
                            {course.courseName}
                        </div>
                        <div className={stylesProps.courseInformation}>
                            {course.credits}
                        </div>
                        <div className={stylesProps.courseInformation}>
                            {course.professor}
                        </div>
                        <div className={stylesProps.courseInformation}>
                            {course.duration}
                        </div>
                        <input
                            type="checkbox"
                            className={stylesProps.courseCheckbox}
                            checked={isChecked ? true : false}
                            onChange={function () {
                                handleCheckboxChange(course);
                            }}
                        />
                    </div>
                );
            })}

            <div className={stylesProps.addCourseContainer}>
                <button
                    className={stylesProps.addCourseButton}
                    onClick={function () {
                        handleSubmit();
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

function getCoursesByUser() {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (!userFromStorage || !userFromStorage.id) return null;
    return listUserAccount.find(users => users.id === userFromStorage.id);
};