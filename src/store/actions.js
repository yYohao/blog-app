import {
  getTexts
} from "../../api/index"

import {
  TEXTS
} from "./mutation-type"

export default {
  async reqText({commit}){
    const result = await getTexts();
    commit(TEXTS, {texts: result.message})
  }
}
