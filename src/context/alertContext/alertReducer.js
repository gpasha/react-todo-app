import { ALERT_SHOW, ALERT_HIDE } from '../types'

const handlers = {
    [ALERT_SHOW]: (state, {payload}) => ({...payload, visible: true}),
    [ALERT_HIDE]: state => ({...state, visible: false}),
    DEFAULT: state => state
}

export const AlertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}