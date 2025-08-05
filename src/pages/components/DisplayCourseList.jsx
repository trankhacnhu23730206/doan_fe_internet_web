export function DisplayCourseList({ courseList, containerClass, itemClass }) {
    return (
        <div>
            {courseList.map((course, index) => (
                <div key={index} className={containerClass}>
                    <div className={itemClass}>{index + 1}</div>
                    <div className={itemClass}>{course.courseCode}</div>
                    <div className={itemClass}>{course.courseName}</div>
                    <div className={itemClass}>{course.credits}</div>
                    <div className={itemClass}>{course.professor}</div>
                    <div className={itemClass}>{course.duration}</div>
                </div>
            ))}
        </div>
    );
}