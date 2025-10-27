import React from 'react'

interface DecorativeLinesProps {
  color?: string
  width?: number
  height?: number
  className?: string
}

const DecorativeLines: React.FC<DecorativeLinesProps> = ({
  color = '#374151',
  width = 14,
  height = 17,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 14 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M13.0634 1.04887L1.28377 8.6849'
        stroke={color}
        strokeWidth='2.5'
      />
      <path
        d='M12.4594 7.39164L0.679762 15.0277'
        stroke={color}
        strokeWidth='2.5'
      />
    </svg>
  )
}

export default DecorativeLines
