import CryptoJS from 'crypto-js'

export default ({ app }, inject) => {
  inject('decryptFunc', (encryptedData, fullPath) => {
    const split = encryptedData.split(':')
    if (split.length < 2) return ''

    const reb64 = CryptoJS.enc.Hex.parse(split[1])
    const bytes = reb64.toString(CryptoJS.enc.Base64)

    const hash = CryptoJS.AES.decrypt(bytes, app.$config.secretKey, {
      iv: split[0],
      mode: CryptoJS.mode.CTR,
    })
    const plain = hash.toString(CryptoJS.enc.Utf8)
    let log = { path: fullPath, response: JSON.parse(plain) }
    if (app.$config.flavor == 'DEVELOPMENT') {
      console.log(log)
    }

    return JSON.parse(plain)
  })
}
