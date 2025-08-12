import { DisplayCourseList } from "../components/DisplayCourseList";
import { listUserAccount } from "../Login/useLogin";


export function DisplayCourses({ stylesProps }) {
    const userLogedIn = getCoursesByUser();

    return (
        <DisplayCourseList
            courseList={userLogedIn.courses}
            containerClass={stylesProps.courseInformationContainer}
            itemClass={stylesProps.courseInformation}
        />
    );
}

function getCoursesByUser() {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (!userFromStorage || !userFromStorage.id) return null;
    return listUserAccount.find(users => users.id === userFromStorage.id);
};