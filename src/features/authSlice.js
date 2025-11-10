import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));
const initialAuth = storedUser
  ? { isAuth: true, currentUser: storedUser }
  : { isAuth: false, currentUser: null };

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    ...initialAuth,
    userData: [
      { email: "aditya@1234.com", password: "ppp123", name: "Aditya" },
    ],
  },
  reducers: {
    loginUser: (state, action) => {
      const user = state.userData.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (user) {
        state.isAuth = true;
        state.currentUser = user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Login success:", user);
      } else {
        alert("Invalid email or password");
      }
    },

    signUpUser: (state, action) => {
      const existingUser = state.userData.find(
        (u) => u.email === action.payload.email
      );
      if (existingUser) {
        alert("User already exists!");
        return;
      }
      const newUser = {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
      };
      state.userData.push(newUser);
      state.isAuth = true;
      state.currentUser = newUser;
      localStorage.setItem("user", JSON.stringify(newUser));
      console.log("Signup success:", newUser);
    },

    logOutUser: (state) => {
      state.isAuth = false;
      state.currentUser = null;
      localStorage.removeItem("user");
      console.log("Logged out");
    },
  },
});

export const { loginUser, signUpUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
