import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import RouteGuard from './RouteGuard';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Routes>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={RouteGuard}>
        <Route path="/home" component={Home} />
        <Route path="/pricing" component={Pricing} />
      </Route>
      <Route path="*" element={()=> <div>Page Not found!!!</div>} />
    </Routes>
  );
}

export default App;
