import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:{
    language:sessionStorage.getItem('language') || 'zh-CN', //语言
    activeNavIndex:sessionStorage.getItem('activeNavIndex') || 0, //主页顶部导航栏的下标
  },
  reducers:{
    changeLanguage(state,action){
      state.language = action.payload
    },
    changeActiveNavIndex(state,action){
      state.activeNavIndex = action.payload
    }
  }
})

export const { changeLanguage,changeActiveNavIndex } = counterSlice.actions;

export default counterSlice.reducer;