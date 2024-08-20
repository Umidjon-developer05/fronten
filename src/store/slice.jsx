import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  _id: "",
  email: "",
  name: "",
  image: "",
  createdAt: "",
  updatedAt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, name, image, createdAt, updatedAt } = action.payload;
      state._id = _id;
      state.email = email;
      state.name = name;
      state.image = image;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
    clearUser: (state) => {
      state._id = "";
      state.email = "";
      state.name = "";
      state.image = "";
      state.createdAt = "";
      state.updatedAt = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const logoutUser = (userId) => async (dispatch) => {
  try {
    console.log(userId);
    if (userId) {
      const res = await axios.delete(
        `https://backend-web-virid.vercel.app/auth/get-one-delete/${userId}?secret_key=umidjon`
      );
      if (res?.status === 200) {
        dispatch(clearUser());
      }
    }
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export default userSlice.reducer;
