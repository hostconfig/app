import {
  type Application
} from 'express'

declare module '@hostconfig/app' {
  const app: Application
}
