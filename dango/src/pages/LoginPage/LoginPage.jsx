import LoginLogo from "../../components/Icons/LoginLogo/LoginLogo";
import { LoginForm } from "../../components/forms";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginscreen}>
      <a className={styles.signIn}>Sign in</a>
      <div className={styles.content}>
        <div className={styles.branding}>
          <LoginLogo />
        </div>
        <LoginForm />
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/LoginMain.svg`}
        className={styles.backgroundIcon}
        alt="Login Icon"
      />
    </div>
  );
};

export default LoginPage;
