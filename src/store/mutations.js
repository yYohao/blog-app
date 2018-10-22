import {
  TEXTS
} from "./mutation-type"

export default {
  [TEXTS](state, {texts}){
    state.texts = texts;
  }
}
