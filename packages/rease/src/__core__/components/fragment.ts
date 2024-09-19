import { Rease } from '../Rease'

//
// RFragment
//
export class RFragment extends Rease {
  constructor({ children }: { children?: any }) {
    super()
    this.insert(children)
  }
}
