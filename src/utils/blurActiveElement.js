export const blurActiveElement = () => {
  const activeElement = document.activeElement
  activeElement && activeElement.blur()
}
