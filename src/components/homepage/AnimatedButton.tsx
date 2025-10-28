'use client'

import { Button } from '@/src/components/ui/button'
import cn from '@/src/lib/utils'
import { ArrowUpRightIcon } from 'lucide-react'

interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  textColor?: string
}

const AnimatedButton = ({
  children,
  variant = 'default',
  size = 'sm',
  className,
  onClick,
  href,
  disabled = false,
  textColor,
}: AnimatedButtonProps) => {
  const baseClasses = cn(
    'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    size === 'sm' && 'h-9 px-3',
    size === 'default' && 'h-10 px-4 py-2',
    size === 'lg' && 'h-11 px-8',
    variant === 'default' && 'text-palette-80',
    variant === 'outline' &&
      'border border-palette-30 bg-palette-80 text-palette-30',
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={{
          backgroundColor: variant === 'default' ? '#791142' : undefined,
          transition: 'background-color 0.25s ease-in-out',
        }}
        onMouseEnter={(e) => {
          if (variant === 'default') {
            e.currentTarget.style.backgroundColor = '#E00074'
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'default') {
            e.currentTarget.style.backgroundColor = '#791142'
          }
        }}
      >
        <span
          className='text-sm font-medium transition-all duration-300'
          style={{
            color: textColor,
            filter: 'brightness(1)',
          }}
          onMouseEnter={(e) => {
            if (textColor) {
              e.currentTarget.style.filter = 'brightness(1.2)'
            }
          }}
          onMouseLeave={(e) => {
            if (textColor) {
              e.currentTarget.style.filter = 'brightness(1)'
            }
          }}
        >
          {children}
        </span>
        <div className='relative h-4 w-4 overflow-hidden'>
          {/* Current arrow - slides out to top-right */}
          <div className='absolute inset-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-4 group-hover:translate-x-4'>
            <ArrowUpRightIcon
              className='h-4 w-4'
              style={{ color: textColor }}
            />
          </div>

          {/* New arrow - slides in from bottom-left */}
          <div className='absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100'>
            <ArrowUpRightIcon
              className='h-4 w-4'
              style={{ color: textColor }}
            />
          </div>
        </div>
      </a>
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(baseClasses, !className?.includes('w-') && 'w-full')}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: variant === 'default' ? '#791142' : undefined,
        transition: 'background-color 0.25s ease-in-out',
      }}
      onMouseEnter={(e) => {
        if (variant === 'default') {
          e.currentTarget.style.backgroundColor = '#E00074'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'default') {
          e.currentTarget.style.backgroundColor = '#791142'
        }
      }}
    >
      <span
        className='text-sm font-medium transition-all duration-300'
        style={{
          color: textColor,
          filter: 'brightness(1)',
        }}
        onMouseEnter={(e) => {
          if (textColor) {
            e.currentTarget.style.filter = 'brightness(1.2)'
          }
        }}
        onMouseLeave={(e) => {
          if (textColor) {
            e.currentTarget.style.filter = 'brightness(1)'
          }
        }}
      >
        {children}
      </span>
      <div className='relative ml-2 h-4 w-4 overflow-hidden'>
        {/* Current arrow - slides out to top-right */}
        <div className='absolute inset-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-4 group-hover:translate-x-4'>
          <ArrowUpRightIcon className='h-4 w-4' style={{ color: textColor }} />
        </div>

        {/* New arrow - slides in from bottom-left */}
        <div className='absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100'>
          <ArrowUpRightIcon className='h-4 w-4' style={{ color: textColor }} />
        </div>
      </div>
    </Button>
  )
}

export default AnimatedButton
