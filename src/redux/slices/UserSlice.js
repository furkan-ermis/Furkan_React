import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk fonksiyonunu oluştur
export const loginUser = createAsyncThunk("user/login", async (credentials) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/Users?email=${credentials.email}`
    );

    if (data.length > 0 && data[0].password === credentials.password) {
      return data[0];
    } else {
      throw new Error("Şifreniz Yanlış");
    }
  } catch (error) {
    throw new Error("Böyle bir kullanıcı yok");
  }
});

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/Users",
        userData
      );
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload); // Bu kısmı ihtiyacınıza göre güncelleyin
      });
  },
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
