import core from 'express-serve-static-core'

declare module '@hostconfig/app' {
  const app: core.Express
}
