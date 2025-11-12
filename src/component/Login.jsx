import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from "../features/authSlice";
import { loadUserFavorites } from "../features/favoritesSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.authentication);

  function handleChange(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUpUser(user));
    } else {
      dispatch(loginUser(user));
    }

    setTimeout(() => {
      console.log(isAuth);
      
      if (isAuth) {
        dispatch(loadUserFavorites());
        navigate("/");
      }
    }, 500);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Movieverse
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              {isSignUp ? "Create a new account" : "Sign in to your account"}
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {isSignUp && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => setIsSignUp(false)}
                      className="font-medium text-blue-600 hover:underline cursor-pointer"
                    >
                      Sign in
                    </span>
                  </>
                ) : (
                  <>
                    Don’t have an account yet?{" "}
                    <span
                      onClick={() => setIsSignUp(true)}
                      className="font-medium text-blue-600 hover:underline cursor-pointer"
                    >
                      Sign up
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
