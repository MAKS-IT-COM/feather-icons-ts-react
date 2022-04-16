import React, { FC } from 'react'
// for now this icons json is generated via the build script from latest feather
// TODO: automatically generate this JSON via this repo's build script
import icons from './icons.json'

const createMarkup = (markup: string) => {
  // we dont sanitize markup 
  // since icons.json is maintained within the package before build
  return { __html: markup }
}

interface IIconInner {
  icon: string
}

const IconInner : FC<IIconInner> = (props : IIconInner) => {
  const { icon } = props

  
  // icons are based on generated icons.json from feather lib
  interface IIcons {
    [key: string]: string
  }

  const iconMarkup = (icons as IIcons)[icon]

  if (iconMarkup) {
    // i didnt want to use dangerouslySetInnerHTML
    // but this way I can just use the JSON to spit out SVG.
    return <g dangerouslySetInnerHTML={createMarkup(iconMarkup)} />
  }
  return null
}

export {
  IconInner
}
