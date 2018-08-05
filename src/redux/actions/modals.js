import reducer from '../core/reducers'


const open = (name, data) => reducer.modals.open({ name, data })

const close = (name) => reducer.modals.close(name)


export default {
  open,
  close,
}