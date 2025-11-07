import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    isAuth:false,
    userData: [{ email: "aditya@1234.com", password: "ppp123" }],
  },
  reducers: {
    loginUser: (state, action) => {
      const user = state.userData.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.isAuth = true
        console.log("Success:", { ...user, isLoggedIn: true });
        console.log(state.userData);
        
      } else {
        console.log("un success");
      
      }
    },
    logOutUser: (state, action) => {
        
        const user = state.userData.find(
            (user) =>
                user.email === action.payload.email &&
            user.password === action.payload.password
        );
        if (!user) {
          state.isAuth = false
        console.log("Success:", { ...user, isLoggedIn: false });
        console.log(state.userData);
      } else console.log("un success");
    },
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer;
