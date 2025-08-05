import { DisplayCourseList } from "../components/DisplayCourseList";
import { listUserAccount } from "../Login/useLogin";

export function DisplayCourses({ stylesProps }) {
    const firstUserInfor = listUserAccount[0];
    return (
        <DisplayCourseList
            courseList={firstUserInfor.courses}
            containerClass={stylesProps.courseInformationContainer}
            itemClass={stylesProps.courseInformation}
        />
    );
}


