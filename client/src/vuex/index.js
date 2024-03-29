import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations'
import frame from 'FRAME'
import config from '../commons/config'
let sensorOpts = config.sensorOpts
Vue.use(Vuex)
// 在Vue实例中通过this.vxMutations进行使用
frame.vueInstall({ module: 'vx', name: 'mutations' }, types)

const state = {
  month: 4,
  timelineTopRange: [Date.parse(new Date(2016, 11, 18)), Date.parse(new Date(2016, 11, 19))],
  daysta: [],
  minutesta: [],
  trajData: [],
  curtime: new Date(2016, 11, 18).getTime(),
  slidingwindowsize: 30 * 60 * 1000,
  focusLocation: null,
  filterCircle: false,
  airportSelected: 'PEK',
  currentCenterAirport: 'ZBAA',
  filterPolygon: false,
  filterShow: 'filterRemove',
  filterTrajShow: false,
  brushFinish: true, // judge whether brush finished ß
  brushFinish1: true, // judge whether brush finished ß
  brushEmpty: false,
  curScale: 8,
  emPixel: null,
  focusLocationArray: {
    World: {
      scale: 3
    },
    China: {
      scale: 4
    },
    Beijing: {
      scale: 8
    },
    PEK: {
      scale: 13
    }
  },
  centerAirportArray: {
    ZBAA: [40.076805, 116.588355],
    ZBNY: [39.4652, 116.2312], // 北京南苑机场
    ZBSJ: [38.1651, 114.4150], // 石家庄正定国际机场
    ZBTJ: [39.0728, 117.2045] // 天津滨海国际机场
  },
  loading: true
}

const mutations = {
  [types.SWITCH_MONTH] (state, month) {
    state.month = month
  },
  [types.DAY_STA] (state, daysta) {
    state.daysta = daysta
  },
  [types.MINUTE_STA] (state, minutesta) {
    state.minutesta = minutesta
  },
  [types.AIRPORTSELECTED] (state, airportSelected) {
    state.minutesta = airportSelected
  },
  [types.TRAJDATA] (state, trajData) {
    state.trajData = trajData
  },
  [types.TIMELINETOPRANGE] (state, timelineTopRange) {
    state.timelineTopRange = timelineTopRange
  },
  [types.CURTIME] (state, curtime) {
    state.curtime = curtime
  },
  [types.SLIDINGWINDOWSIZE] (state, slidingwindowsize) {
    state.slidingwindowsize = slidingwindowsize
  }
}

export default new Vuex.Store({
  strict: true,
  state,
  mutations
})
