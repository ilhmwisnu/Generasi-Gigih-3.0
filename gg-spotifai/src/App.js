import LoginView from "./component/login_view";
import HomeView from "./component/home_view";
import { useState, useEffect } from "react";

function App() {
  let [isLogin, setIsLogin] = useState(false);
  let [accessToken, setAccessToken] = useState(null);

  async function login() {
    setIsLogin(true);
  }

  useEffect(() => {
    const hashParam = new URLSearchParams(window.location.hash.replace("#",""))
    
    let token = hashParam.get("access_token")
    console.log(token);

    if (token) {
      setAccessToken(token)
      setIsLogin(true)
    } else {
      setAccessToken(null)
      setIsLogin(false)
    }
  }, []);

  return (
    <>
      {isLogin && <HomeView></HomeView>}
      {!isLogin && <LoginView onClick={login}></LoginView>}
    </>
  );
}

export default App;
