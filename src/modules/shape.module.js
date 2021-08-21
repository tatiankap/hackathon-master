import {Module} from '../core/module'

export default class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  static trigger() {
    console.log('voice')
  }
}
