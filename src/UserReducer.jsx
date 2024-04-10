import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const editUser = state.find((user) => user.id == id);
      if (editUser) {
        editUser.name = name;
        editUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deleteUser = state.find((user) => user.id == id);
      if (deleteUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
