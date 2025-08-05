import { useContext } from "react";
import { listUserAccount } from "../Login/useLogin";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

const getCoursesByUser = (userId) => {
    return listUserAccount.find(users => users.id === userId.id)
};

export function DisplayCourses({ stylesProps }) {
    const { user } = useContext(UserContext);
    const negative = useNavigate();

    const userLogedIn = getCoursesByUser(user);
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