import { createSlice } from "@reduxjs/toolkit";
const Statemange = createSlice({
  name: "Status",
  initialState: { checkStatus: false ,nameupdate:'',apiupdate:[],apiload:{}},
  reducers: {
    loginReducer: (state, action) => {
      state.checkStatus = action.payload;
    },
    signpage:(state,action) =>{
      state.nameupdate=action.payload;
    },
    api:(state,action) =>{
      state.apiupdate=action.payload;
    },
    // apiget:(state,action)=>{
    //   state.apiload=action.payload;
    // }
  },
});
export const { loginReducer,signpage,api,apiget } = Statemange.actions;
export default Statemange.reducer;
