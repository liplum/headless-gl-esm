import * as Fs from 'fs'
import { once } from "events"
import C from './util/common.js'
import { fetch } from './util/fetch.js'
import Tar from 'tar'

const url = `https://github.com/${C.owner}/${C.repo}/releases/download/v${C.version}/${C.assetName}`

console.log("fetch", url)
const response = await fetch(url)

console.log("unpack to", C.dir.release)
await Fs.promises.rm(C.dir.build, { recursive: true }).catch(() => {})
await Fs.promises.mkdir(C.dir.release, { recursive: true })
const tar = Tar.extract({ gzip: true, C: C.dir.release })
response.stream().pipe(tar)
await once(tar, 'finish')
