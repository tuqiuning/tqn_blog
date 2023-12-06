import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:{
    counter:'首页',
    language:'zh-CN',
  },
  reducers:{
    addNumber(state = initialState,action){
      console.log(action)
      state.counter = state.counter + action.payload
    },
    subNumber(state,action){

    },
    changeLanguage(state,action){
      state.language = action.payload
    }
  }
})

export const { addNumber,subNumber,changeLanguage } = counterSlice.actions;

export default counterSlice.reducer;