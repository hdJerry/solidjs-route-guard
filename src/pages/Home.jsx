import appstyles from '../App.module.css';
export default function Home() {
  return (
    <div class={appstyles.wrapper}>
      <h2>Home page here</h2>
      <p>You can see this because you are authenticated</p>
    </div>
  );
}
