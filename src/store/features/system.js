import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name:'system',
  initialState:{
    language:sessionStorage.getItem('language') || 'zh-CN', //语言
    activeNavIndex:sessionStorage.getItem('activeNavIndex') || 0, //主页顶部导航栏的下标
    navColor:sessionStorage.getItem('navColor' )|| '#ffffff', //导航栏颜色
  },
  reducers:{
    changeLanguage(state,action){
      state.language = action.payload
    },
    changeActiveNavIndex(state,action){
      state.activeNavIndex = action.payload
    },
    changeNavColor(state,action){
      state.navColor = action.payload
    }
  }
})

export const { changeLanguage,changeActiveNavIndex,changeNavColor } = systemSlice.actions;

export default systemSlice.reducer;