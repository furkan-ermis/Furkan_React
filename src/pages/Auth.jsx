import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../redux/slices/UserSlice";
import { getWishlist } from "../redux/slices/CommerceSlice";
import axios from "axios";
function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isRegistered, setIsRegistered] = useState(true);
  const login = () => {
    const credientials = {
      email: email,
      password: password,
    };
    dispatch(loginUser(credientials));
    dispatch(getWishlist(email));
  };

  const register = () => {
    const credientials = {
      email: email,
      password: password,
    };

    dispatch(registerUser(credientials));
    axios.post("http://localhost:3000/Wishlists", {
      products: [],
      email: email,
    });
  };
  const handleState = () => {
    setIsRegistered(!isRegistered);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="nm-page-default nm-row">
      <div className="nm-page-default-col col-xs-12">
        <div
          id="post-10"
          className="post-10 page type-page status-publish hentry"
        >
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper" />
            <div id="customer_login" className="nm-myaccount-login">
              <div className="nm-myaccount-login-inner">
                {isRegistered && (
                  <div id="nm-login-wrap" className="inline slide-up fade-in">
                    <h2>Sign In</h2>
                    <div method="post" className="login">
                      <p className="form-row form-row-wide">
                        <label htmlFor="username">
                          Email address
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="username"
                          id="username"
                          defaultValue=""
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password">
                          Password <span className="required">*</span>
                        </label>
                        <input
                          value={password}
                          className="input-text"
                          type="password"
                          name="password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </p>

                      <p className="form-actions">
                        <button
                          onClick={login}
                          className="woocommerce-button button woocommerce-form-login__submit"
                          name="login"
                          value="Sign In"
                        >
                          Sign In
                        </button>
                      </p>
                      <div className="nm-login-form-divider">
                        <span>Or</span>
                      </div>
                      <span
                        onClick={handleState}
                        id="nm-show-register-button"
                        className="button border"
                      >
                        Create an account
                      </span>
                      <p />
                    </div>
                  </div>
                )}
                {!isRegistered && (
                  <div>
                    <h2>Register</h2>
                    <div method="post" className="register">
                      <p className="form-row form-row-wide">
                        <label htmlFor="reg_email">
                          Email address <span className="required">*</span>
                        </label>
                        <input
                          value={email}
                          type="email"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="email"
                          id="reg_email"
                          defaultValue=""
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="reg_password">
                          Password <span className="required">*</span>
                        </label>
                        <input
                          value={password}
                          type="password"
                          className="input-text"
                          name="password"
                          id="reg_password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </p>
                      <div className="woocommerce-privacy-policy-text" />
                      <p className="form-actions">
                        <input
                          type="hidden"
                          id="woocommerce-register-nonce"
                          name="woocommerce-register-nonce"
                          defaultValue="1b7290ffc7"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/my-account/"
                        />
                        <button
                          onClick={register}
                          className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                          name="register"
                          value="Register"
                        >
                          Register
                        </button>
                      </p>
                      <div className="nm-login-form-divider">
                        <span>Or</span>
                      </div>
                      <span
                        onClick={handleState}
                        id="nm-show-login-button"
                        className="button border"
                      >
                        Sign In
                      </span>
                      <p />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
