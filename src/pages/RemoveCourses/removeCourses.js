import { listUserAccount } from "../Login/useLogin";
import { useNavigate } from "react-router-dom";

function getCoursesByUser() {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (!userFromStorage || !userFromStorage.id) return null;
    return listUserAccount.find(users => users.id === userFromStorage.id);
};

export function DisplayCourses({ stylesProps }) {
    const negative = useNavigate();

    const userLogedIn = getCoursesByUser();
    if (!userLogedIn || !userLogedIn.courses || userLogedIn.courses.length === 0 || !userLogedIn.id) {
        negative('/');
    }

    return (
        <div>
            {userLogedIn.courses.map((course, index) => (
                <div key={index} className={stylesProps.courseInformationContainer}>
                    <div className={stylesProps.courseInformation}>{index + 1}</div>
                    <div className={stylesProps.courseInformation}>{course.courseCode}</div>
                    <div className={stylesProps.courseInformation}>{course.courseName}</div>
                    <div className={stylesProps.courseInformation}>{course.credits}</div>
                    <div className={stylesProps.courseInformation}>{course.professor}</div>
                    <div className={stylesProps.courseInformation}>{course.duration}</div>
                    <input type="checkbox" className={stylesProps.courseCheckbox} />
                </div>
            ))}
            <div className={stylesProps.addCourseContainer}>
                <button className={stylesProps.addCourseButton}>Submit</button>
            </div>
        </div>
    );
}