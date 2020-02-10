import {NAV,SUBNAV,TEAM,RUSH} from '../constants/home'
import {API_HOME_NAV,API_HOME_SUB_NAV,API_HOME_TEAM,API_HOME_RUSH} from '../constants/api'
import {createAction} from "../utils/redux";

/*
* 首页第一级导航数据
* */
export const dispatchHomeNav = payload => createAction({
  url:API_HOME_NAV,
  type:NAV,
  payload
})
