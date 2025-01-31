export class EXTTextureFilterAnisotropic {
  constructor () {
    this.TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE
    this.MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF
  }
}

export function getEXTTextureFilterAnisotropic (context) {
  let result = null
  const exts = context.getSupportedExtensions()

  if (exts && exts.indexOf('EXT_texture_filter_anisotropic') >= 0) {
    result = new EXTTextureFilterAnisotropic()
  }

  return result
}
