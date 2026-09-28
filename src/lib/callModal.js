export const OPEN_CALL_MODAL_EVENT = 'open-call-modal'

export function openCallModal() {
  window.dispatchEvent(new Event(OPEN_CALL_MODAL_EVENT))
}
