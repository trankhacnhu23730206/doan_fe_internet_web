import { useState, useRef, useEffect } from "react";
import styles from "./AccountLayout.module.css"
import logo from "../../../assets/logoELearning.png";
import avatarAccount from "../../../assets/Courses/avatarAccount.png";
import passwordKeyImage from "../../../assets/Courses/passwordKeyImage.png";
import logOut from "../../../assets/Courses/logout.png";
import profileAccount from "../../../assets/Account/ProfileAvatar.png";
import avatarLogo from "../../../assets/Account/avatarLogo.png";
import { getCoursesByUser } from "../CoursesLayout/CoursesLayout";
import { useNavigate } from "react-router-dom";
import { NavNagavigateToPage } from "../CoursesLayout/NavNagavigateToPage";

export function AccountLayout() {
    const userLogedIn = getCoursesByUser();

    const [showProfile, setShowProfile] = useState(false);
    const [activeItem, setActiveItem] = useState("account");

    const profileRef = useRef(null);
    const headingAvatarRef = useRef(null);

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleNavigate = (page) => {
        navigate(page);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                (profileRef.current) &&
                (!profileRef.current.contains(event.target)) &&
                (headingAvatarRef.current) &&
                (!headingAvatarRef.current.contains(event.target))
            ) {
                setShowProfile(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.coursesContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.contentNavHeading} onClick={() => { handleNavigate(`/courses`) }} >
                    <img className={styles.logoELearning} src={logo} alt="logo-ELearning" />
                    <h2>E-Learning</h2>
                </div>
                <div
                    ref={headingAvatarRef}
                    className={styles.contentNavHeadingAvatar}
                    onClick={() => setShowProfile(!showProfile)}
                >
                    <img className={styles.avatarAccount} src={avatarAccount} alt="Avatar Account" />
                    <p className={styles.fontUsername}>{userLogedIn.fullName}</p>
                </div>
            </div>

            {showProfile && (
                <div className={styles.navHeadingProfileContainer} ref={profileRef} >
                    <div className={styles.navHeadingProfileContent} onClick={() => handleNavigate(`/account`)}>
                        <img className={styles.logoInfo} src={passwordKeyImage} alt="Password Key" />
                        <p>Account</p>
                    </div>
                    <div className={styles.navHeadingProfileContent} onClick={() => handleLogOut}>
                        <img className={styles.logoInfo} src={logOut} alt="Log Out" />
                        <p>Log Out</p>
                    </div>
                </div>
            )}

            <div className={styles.contentContainer}>
                <div className={styles.navLeftContainer}>
                    <div className={styles.navLeftHeading}>
                        <img
                            className={styles.imageAvatarHeading}
                            src={profileAccount}
                            alt={`Personal Information`}
                        />
                        <p>{userLogedIn.fullName}</p>
                    </div>
                    <NavNagavigateToPage
                        stylesProps={styles}
                        imgSrc={avatarLogo}
                        pageName="Personal Information"
                        navigateTo="account"
                        isActive={activeItem === "account"}
                        onClick={() => setActiveItem("account")}
                    />
                </div>

                <div className={styles.contentRightContainer}>
                    <h2 className={styles.contentRightHeading}>Personal Information</h2>
                    <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Username</span>
                        <span className={styles.contentItemRight}>{userLogedIn.username}</span>
                    </div>

                    <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Student ID</span>
                        <span className={styles.contentItemRight}>{`userLogedIn.studentID`}</span>
                    </div>

                    <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Gender</span>
                        <span className={styles.contentItemRight}>{`userLogedIn.Gender`}</span>
                    </div>

                    <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Class Code</span>
                        <span className={styles.contentItemRight}>{userLogedIn.classCode}</span>
                    </div>

                    <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Password</span>
                        <input type="password" className={styles.formInput}></input>
                    </div>

                    <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Confirm Password</span>
                        <input type="password" className={styles.formInput}></input>
                    </div>

                     <div className={styles.contentItemContainer}>
                        <span className={styles.contentItemLeft}>Email</span>
                        <input type="email" className={styles.formInput} placeholder={userLogedIn.email}></input>
                    </div>

                    <div className={styles.addCourseContainer}>
                        <button
                            className={styles.addCourseButton}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

