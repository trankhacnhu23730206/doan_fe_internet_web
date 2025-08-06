import { DisplayCourses } from "./removeCourses";
import styles from "./RemoveCourses.module.css";

export function RemoveCoursesPage() {
  return (
    <div>
      <div className={styles.courseTitleContainer}>
        <div className={styles.courseTitleInfor}>NO.</div>
        <div className={styles.courseTitleInfor}>Course Code</div>
        <div className={styles.courseTitleInfor}>Subject Name</div>
        <div className={styles.courseTitleInfor}>Credits</div>
        <div className={styles.courseTitleInfor}>Professor</div>
        <div className={styles.courseTitleInfor}>School Year</div>
      </div>

      <DisplayCourses stylesProps={styles} />
    </div>
  );
}
