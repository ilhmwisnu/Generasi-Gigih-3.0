const LoginView = ({ onClick }) => {
  return ( <div className="login-view">
    <h2 className="title">Spotifai</h2>
    <button className="btn-primary" onClick={onClick}>Login</button>
  </div> );
}
 
export default LoginView;