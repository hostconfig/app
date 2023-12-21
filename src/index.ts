#!/usr/bin/env node

/**
 * Module dependencies.
 */

import express, { Request, Response, NextFunction, Router } from 'express'
// this example uses express web framework so we know what longer build times
// do and how Dockerfile layer ordering matters. If you mess up Dockerfile ordering
// you'll see long build times on every code change + build. If done correctly,
// code changes should be only a few seconds to build locally due to build cache.
// import { body, header, validationResult } from 'express-validator'
// import { readFileSync } from 'fs'
import debugLib from 'debug'
// import http from 'http'
// import createError from 'http-errors'
import { URL } from 'url'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
// morgan provides easy logging for express, and by default it logs to stdout
// which is a best practice in Docker. Friends don't let friends code their apps to
// do app logging to files in containers.

type Route = {
  path: string;
  route: Router;
}

type Routes = Route[]

const __filename = new URL('', import.meta.url).pathname
const __dirname = new URL('.', import.meta.url).pathname // Will contain trailing slash

const app = express()
export const debug = debugLib('hostconfig:app')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'static')))

export default app
