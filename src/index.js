import css from './style.css'
import QRCode from '../node_modules/qrcode/build/qrcode.js'

const block = function (el, config) {
  const child = document.createElement('div')
  child.classList.add(css.qrcode)

  const content = config.content
  const color = config.color

  el.appendChild(child)

  if (content) {
    if (color) {
      child.style.setProperty('--qrcodeColor', color)
    }

    QRCode.toString(content, { type: 'svg', color: { dark: '#000000', light: '#00000000' } }, function (err, str) {
      if (err) console.error(err)
      child.innerHTML = str
    })
  } else {
    child.innerHTML = '<p>QRCode</p>'
  }

  this.beforeDestroy = () => {
  }

  this.stepForward = step => {
  }

  this.destroy = () => {
  }
}

export default block

block.install = Presenta => {
  Presenta.addBlock('qrcode', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
