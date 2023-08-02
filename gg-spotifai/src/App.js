import LoginView from "./component/login_view";
import HomeView from "./component/home_view";
import { useState, useEffect } from "react";

function App() {
  let [isLogin, setIsLogin] = useState(false);
  let [accessToken, setSccessToken] = useState(null);

  async function login() {
    setIsLogin(true);
  }

  useEffect(() => {
    console.log(window.location.accessToken);
  }, []);

  return (
    <>
      {isLogin && <HomeView></HomeView>}
      {!isLogin && <LoginView onClick={login}></LoginView>}
    </>
  );
}

export default App;
