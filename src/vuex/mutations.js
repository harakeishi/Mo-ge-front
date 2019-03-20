/*
  ミューテーションの管理
*/

import {
  UPDATE_GENERATION_NUMBER
} from './mutation_types'

export default {
  // モンスターの生成元ファイルサイズ保存用
  [UPDATE_GENERATION_NUMBER] (state,  generation_number) {
    state.GenerationNumber = generation_number
    console.log(generation_number)
    console.log(state.GenerationNumber)
  }
}
