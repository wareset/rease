import { Rease } from '../Rease'

//
// RFragment
//
export class RFragment extends Rease {
  constructor(props: { children?: any }) {
    super()
    this.insert(props.children)
  }
}
