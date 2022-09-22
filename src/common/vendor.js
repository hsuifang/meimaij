import { Toast, Modal } from 'bootstrap'

export const bsToast = (id) => new Toast(document.getElementById(id))

export const bsModal = (id) => new Modal(document.getElementById(id))
export const bsAppModal = (dom) => new Modal(dom)
