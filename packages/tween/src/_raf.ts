// const now = typeof performance !== 'undefined' ? (): number => performance.now() : Date.now

// var vendors = ['ms', 'moz', 'webkit', 'o'];
// for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//     window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
//                                || window[vendors[x]+'CancelRequestAnimationFrame'];
// }

let _perf: typeof performance | typeof Date
const win = typeof window !== 'undefined' ? window : ({} as any)

let cAF: typeof cancelAnimationFrame
let rAF: typeof requestAnimationFrame =
  ((cAF = win.cancelAnimationFrame), win.requestAnimationFrame) ||
  ((cAF = win.oCancelAnimationFrame), win.oRequestAnimationFrame) ||
  ((cAF = win.msCancelAnimationFrame), win.msRequestAnimationFrame) ||
  ((cAF = win.mozCancelAnimationFrame), win.mozRequestAnimationFrame) ||
  ((cAF = win.webkitCancelAnimationFrame), win.webkitRequestAnimationFrame) ||
  ((cAF = clearTimeout),
  (_perf = typeof performance === 'object' ? performance : Date),
  function (callback: (t: number) => any) {
    return setTimeout(function () {
      callback(_perf.now())
    }, 16)
  })

export { rAF as requestAnimationFrame, cAF as cancelAnimationFrame }
