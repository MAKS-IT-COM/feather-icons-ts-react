import React, { FC } from 'react'
import { IconInner } from './IconInner'

interface IFeatherIcon {
  icon: string,
  size: string | number,
  className: string,
  fill: string,
  otherProps: any
}

/**
 * Feather icon
 * otherProps spread will be removed in version 1.
 * @param {icon} icon name that matches from feathericons
 * @returns FeatherIcon react component
 */
const FeatherIcon : FC<IFeatherIcon> = (props : IFeatherIcon) => {

  const { icon, size = 24, className = '', fill = 'none', otherProps } = props

  if (!icon) {
    return null
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-${icon} ${className}`}
      {...otherProps}>
      <IconInner icon={icon} />
    </svg>
  )
}

export { 
  FeatherIcon
}
