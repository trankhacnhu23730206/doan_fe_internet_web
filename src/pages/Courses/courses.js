import { useContext } from "react";
import { DisplayCourseList } from "../components/DisplayCourseList";
import { UserContext } from "../components/UserContext";
import { listUserAccount } from "../Login/useLogin";


export function DisplayCourses({ stylesProps }) {
    const { user } = useContext(UserContext);
    const userLogedIn = getCoursesByUser(user);

    return (
        <DisplayCourseList
            courseList={userLogedIn.courses}
            containerClass={stylesProps.courseInformationContainer}
            itemClass={stylesProps.courseInformation}
        />
    );
}

function getCoursesByUser(user) {
    if (!user || !user.id) return null;
    return listUserAccount.find(users => users.id === user.id);
};