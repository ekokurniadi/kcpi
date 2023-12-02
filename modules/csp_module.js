import { randomBytes } from 'crypto'

export default function cspModule() {
  // Set nuxt CSP options.
  this.options.render.csp = {
    reportOnly: true,
    hashAlgorithm: 'sha256',
  }

  this.nuxt.hook('render:routeContext', (nuxtContext) => {
    // Generate a 128 bit random nonce every request.
    const nonce = randomBytes(16).toString('base64')
    // Inject nonce into vuex state before state is serialized into window.__NUXT__.
    nuxtContext.state.nonce = nonce
  })

  this.nuxt.hook(
    'render:route',
    (url, { cspScriptSrcHashes }, { nuxt: nuxtContext }) => {
      // Extract nonce generated in render:routeContext.
      const nonce = nuxtContext.state.nonce
      // Add nonce to cspScriptSrcHashes. Nuxt will populate all entries in this array
      // to the csp header and meta tags as part of the script-src csp policy.
      cspScriptSrcHashes.push(`'nonce-${nonce}'`)
    }
  )
}