import styles from "./Login.module.css";
import logo from "../../assets/logoELearning.png";
import avatarInput from "../../assets/UserInputAvatar.png";
import passwordInput from "../../assets/passwordInput.png";
import logoContentRightSide from "../../assets/logoContentRightSide.png";
import { useLogin } from "./useLogin";

export function Login() {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
    isFormValid,
    errorMassage,
  } = useLogin();
  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundContainer}>
        <div className={styles.contentLeftContainer}>
          <img
            className={styles.logoELearning}
            src={logo}
            alt="logo-ELearning"
          />
          <h1 className={styles.formHeading}>WELCOME TO</h1>
          <h2 className={styles.formNav}>E-Learning</h2>
          <div className={styles.inputContainer}>
            <div className={styles.formContainer}>
              <img
                className={styles.imageLogo}
                src={avatarInput}
                alt="avatar logo"
              />
              <input
                className={styles.typeInput}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.formContainer}>
              <img
                className={styles.imageLogo}
                src={passwordInput}
                alt="password password"
              />
              <input
                className={styles.typeInput}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {errorMassage && (
            <p className={styles.errorMessage}>{errorMassage}</p>
          )}
          <div
            className={`${styles.buttonSignIn} ${
              !isFormValid ? styles.buttonSignInDisabled : ""
            }`}
            onClick={isFormValid ? handleLogin : null}
          >
            <p>SIGN IN</p>
          </div>
        </div>
        <div className={styles.contentRightContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={logoContentRightSide}
              alt="logo study"
            />
          </div>
          <div className={styles.imageContent}>
            <p>
              “ Education is the passport to the future, for tomorrow belongs
              those who prepare for it today. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
