import { tween } from '@rease/tween'
import * as easing from '@rease/tween/easing'
console.log(easing)

import { css, Rease, signal, render } from 'rease'

const styles = css`
  ._container {
    overflow: hidden;
    background: #111;

    & > div {
      background: #eee;
      width: 50%;
      margin: auto;
      padding: 0 5px;

      & > div {
        background: #f00;
        width: 10px;
        height: 10px;
        opacity: 0.5;
        margin-left: -5px;
        position: relative;
      }
    }
  }
`

function EasingFn(this: Rease, { name }: { name: string }) {
  const $left = signal('0%')

  // this.onDestroy()

  const anim = tween(
    { v: 0 },
    {
      easing: easing[name],
      duration: 4000,
      delay: 0,
    }
  )

  const to = { v: 100 }

  setTimeout(() => {
    // console.log(anim.task)
    // $left.set({ v: 75 })
    // anim.value.v = 75
    to.v = 150
    // anim.task!.executor = null
  }, 1000)

  // setTimeout(() => {
  //   // anim.value.v = 125
  //   to.v = 15
  // }, 3000)

  anim.to(to)
  // anim.to(50)

  anim.onUpdate((v) => {
    // console.log('onUpdate', v)
    $left.set(v.v + '%')
  })

  anim.onFinish((v) => {
    console.log('onFinish', v)
    // anim.to({ v: v.v > 50 ? 0 : 100 })
  })

  this.insert(
    <div>
      <small>{name}</small>
      <div class={styles._container}>
        <div>
          <div style-left={$left}></div>
        </div>
      </div>
    </div>
  )
}

function TestEasings(this: Rease) {
  this.insert(<EasingFn name={'easeLinear'} />)

  this.insert(
    Object.keys(easing).map((v) => {
      return <EasingFn name={v} />
    })
  )
}

render(document.body, TestEasings)

