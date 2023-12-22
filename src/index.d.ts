import core from 'express-serve-static-core'

declare module '@hostconfig' {
  const app: core.Express
}
