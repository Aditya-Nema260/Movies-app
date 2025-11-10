import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));
const initialAuth = storedUser
  ? { isAuth: true, currentUser: storedUser }
  : { isAuth: false, currentUser: null };

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    ...initialAuth,
    userData: [],
    error: null,
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
        state.error = null; 
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Login success:", user);
      } else {
        state.error = "Invalid email or password"; 
      }
    },

    signUpUser: (state, action) => {
      const existingUser = state.userData.find(
        (u) => u.email === action.payload.email
      );
      if (existingUser) {
        state.error = "User already exists!"; 
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
      state.error = null;
      localStorage.setItem("user", JSON.stringify(newUser));
      console.log("Signup success:", newUser);
    },

    logOutUser: (state) => {
      state.isAuth = false;
      state.currentUser = null;
      state.error = null;
      localStorage.removeItem("user");
      console.log("Logged out");
    },
  },
});

export const { loginUser, signUpUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
