// const now = typeof performance !== 'undefined' ? (): number => performance.now() : Date.now

// var vendors = ['ms', 'moz', 'webkit', 'o'];
// for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//     window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
//                                || window[vendors[x]+'CancelRequestAnimationFrame'];
// }

const win = typeof window !== 'undefined' ? window : ({} as any)

// let _perf = typeof performance === 'object' ? performance : Date
// let cAF: typeof cancelAnimationFrame
// let rAF: typeof requestAnimationFrame =
//   ((cAF = win.cancelAnimationFrame) && win.requestAnimationFrame) ||
//   ((cAF = win.oCancelAnimationFrame) && win.oRequestAnimationFrame) ||
//   ((cAF = win.msCancelAnimationFrame) && win.msRequestAnimationFrame) ||
//   ((cAF = win.mozCancelAnimationFrame) && win.mozRequestAnimationFrame) ||
//   ((cAF = win.webkitCancelAnimationFrame) && win.webkitRequestAnimationFrame) ||
//   ((cAF = clearTimeout),
//   (_perf = typeof performance === 'object' ? performance : Date),
//   function (callback: (t: number) => any) {
//     return setTimeout(function () {
//       callback(_perf.now())
//     }, 16)
//   })

const cAF: typeof cancelAnimationFrame =
  win.cancelAnimationFrame ||
  win.oCancelAnimationFrame ||
  win.msCancelAnimationFrame ||
  win.mozCancelAnimationFrame ||
  win.webkitCancelAnimationFrame ||
  clearTimeout

const rAF: typeof requestAnimationFrame =
  win.requestAnimationFrame ||
  win.oRequestAnimationFrame ||
  win.msRequestAnimationFrame ||
  win.mozRequestAnimationFrame ||
  win.webkitRequestAnimationFrame ||
  (function () {
    const _perf = typeof performance === 'object' ? performance : Date
    return function (callback: (t: number) => any) {
      return setTimeout(function () {
        callback(_perf.now())
      }, 16.6667)
    } as any
  })()

export { rAF as requestAnimationFrame, cAF as cancelAnimationFrame }
