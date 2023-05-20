import { createSlice } from "@reduxjs/toolkit";

export interface InitialUserState {
  user: Nullable<any>;
  loading: boolean;
  name: "pidor";
}
const initialState: InitialUserState = {
  user: null,
  loading: false,
  name: "pidor",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

export const {} = userSlice.actions;
