import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import appstyles from "../App.module.css";

export default function SignIn () {
  const navigate = useNavigate();
  const logIn = () => {
    sessionStorage.setItem('token', 'mytokenisawesome');
    navigate('/home', { replace: true });
  };

  createEffect(() => {
    if(sessionStorage.getItem('token')) {
      navigate('/home', { replace: true })
    }
  })
  return (
    <div class={appstyles.wrapper}>
      <h2>Sign In Page</h2>
      <p>You can see this because you are not authenticated</p>
      <button class={appstyles.login_btn} onClick={logIn}>Log In</button>
    </div>
  )
}