import dCheck from './directives/check'
import checkFunctions from './modules/checkFunctions'
import * as logs from './modules/logs'
import bluePromise from './modules/bluePromise'
import storage from './modules/storage'
import utils from './modules/utils'
import vueInstall from './modules/vueInstall'
import windowInstall from './modules/windowInstall'
import transitions from './transitions'
import config from './config'

export default {
  bluePromise,
  checkFunctions,
  logs,
  storage,
  utils,
  vueInstall,
  windowInstall,
  install: (Vue, { directives = {} } = {}) => {
    if (config.debug) {
      // utils.uBanner('Flight Vis')
      utils.uStrBordered('Welcome To PKUVIS Group !!!')
      utils.uStrBordered('Our Wiki is http://vis.pku.edu.cn/wiki/')
    }
    // 安装自定义指令
    Vue.use(dCheck, directives.check)
    // 安装过渡效果
    Vue.use(transitions)
    // 安装Vue属性
    vueInstall({ module: '$f', name: 'bluePromise' }, bluePromise)
    vueInstall({ module: '$f', name: 'checkFunctions' }, checkFunctions)
    vueInstall({ module: '$f', name: 'logs' }, logs)
    vueInstall({ module: '$f', name: 'storage' }, storage)
    vueInstall({ module: '$f', name: 'utils' }, utils)
    vueInstall({ module: '$f', name: 'vueInstall' }, vueInstall)
    vueInstall({ module: '$f', name: 'windowInstall' }, windowInstall)
  }
}
