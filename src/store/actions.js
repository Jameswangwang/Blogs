import api from '../api/index'
import * as types from './types'

export const authInfo = ({commit}) => {
  console.log(api.authInfo())
}
