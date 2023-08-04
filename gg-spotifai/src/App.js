import LoginView from "./component/login_view";
import HomeView from "./component/home_view";
import { useState, useEffect } from "react";
import {TokenContext} from "./context/context"

function App() {
  let [isLogin, setIsLogin] = useState(false);
  let [accessToken, setAccessToken] = useState(null);

  async function login() {
    window.location =
      "https://accounts.spotify.com/authorize?client_id=bb9769557ac24a278ebe08db49e4dc22&redirect_uri=http://localhost:3000/&response_type=token&scope=playlist-modify-private";
  }

  useEffect(() => {
    const hashParam = new URLSearchParams(
       window.location.hash.replace("#", "")
    );

    let token = hashParam.get("access_token");
    console.log(token);

    if (token) {
      setAccessToken(token);
      setIsLogin(true);
    } else {
      setAccessToken(null);
      setIsLogin(false);
    }
  }, []);

  return (
    <TokenContext.Provider value={accessToken}>
      {isLogin && <HomeView></HomeView>}
      {!isLogin && <LoginView onClick={login}></LoginView>}
    </TokenContext.Provider>
  );
}

export default App;
