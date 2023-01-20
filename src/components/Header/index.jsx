import { NavLink, useNavigate } from "@solidjs/router";
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem('token');
    navigate('/signin', { replace: true });
  }
  return (
    <div class={styles.container}>
      <h3>My Solidjs App</h3>
      <div class={styles.links}>
        <NavLink href="/home">
          Home
        </NavLink>
        <NavLink href="/pricing">
          Pricing
        </NavLink>
      </div>
      <button class={styles.logout_btn} onClick={logOut}>Log out</button>
    </div>
  );
}
