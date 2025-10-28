'use client'

import { HexColorPicker } from 'react-colorful'
import { rgbToHex, hexToRgb } from '../../utils/colorUtils'

interface BrandColorPickerProps {
  onColorChange: (color: string) => void
  color: string
}

const BrandColorPicker = ({ onColorChange, color }: BrandColorPickerProps) => {
  const rgb = hexToRgb(color)

  const handleColorChange = (newColor: string) => {
    onColorChange(newColor)
  }

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (/^#[0-9A-F]{6}$/i.test(value)) {
      onColorChange(value)
    }
  }

  const handleRgbChange = (newR: string, newG: string, newB: string) => {
    const r = parseInt(newR, 10)
    const g = parseInt(newG, 10)
    const b = parseInt(newB, 10)

    if (
      !Number.isNaN(r) &&
      !Number.isNaN(g) &&
      !Number.isNaN(b) &&
      r >= 0 &&
      r <= 255 &&
      g >= 0 &&
      g <= 255 &&
      b >= 0 &&
      b <= 255
    ) {
      const newHex = rgbToHex(r, g, b)
      onColorChange(newHex)
    }
  }

  // Derive display values from color
  const hexValue = color
  const rValue = String(rgb?.r ?? 0)
  const gValue = String(rgb?.g ?? 0)
  const bValue = String(rgb?.b ?? 0)

  return (
    <div className='flex h-auto w-auto flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg'>
      {/* Header */}
      <div className='text-sm font-medium text-black'>
        Select your Brand Color
      </div>

      {/* Color Picker */}
      <div className='flex items-center justify-center'>
        <HexColorPicker color={color} onChange={handleColorChange} />
      </div>

      {/* Input Fields */}
      <div className='flex items-start justify-between'>
        {/* HEX Input */}
        <div className='flex flex-col gap-1'>
          <div className='text-10 font-medium text-black'>HEX</div>
          <div className='rounded bg-white'>
            <input
              type='text'
              value={hexValue}
              onChange={handleHexChange}
              className='tracking-relaxed w-full rounded border-none bg-white px-2.5 py-1 text-sm font-normal leading-relaxed text-black outline outline-1 outline-borders-medium'
            />
          </div>
        </div>

        {/* RGB Inputs */}
        {rgb && (
          <div className='flex gap-0'>
            {/* R Input */}
            <div className='flex flex-col gap-1'>
              <div className='text-10 font-medium text-black'>R</div>
              <input
                type='text'
                value={rValue}
                onChange={(e) =>
                  handleRgbChange(e.target.value, gValue, bValue)
                }
                className='tracking-relaxed w-11 rounded-l border-none bg-white px-2.5 py-1 text-sm font-normal leading-relaxed text-black outline outline-1 outline-borders-medium'
              />
            </div>

            {/* G Input */}
            <div className='flex flex-col gap-1'>
              <div className='text-10 font-medium text-black'>G</div>
              <input
                type='text'
                value={gValue}
                onChange={(e) =>
                  handleRgbChange(rValue, e.target.value, bValue)
                }
                className='tracking-relaxed w-11 rounded-none border-none bg-white px-2.5 py-1 text-sm font-normal leading-relaxed text-black outline outline-1 -outline-offset-0 outline-borders-medium'
              />
            </div>

            {/* B Input */}
            <div className='flex flex-col gap-1'>
              <div className='text-10 font-medium text-black'>B</div>
              <input
                type='text'
                value={bValue}
                onChange={(e) =>
                  handleRgbChange(rValue, gValue, e.target.value)
                }
                className='tracking-relaxed w-11 rounded-r border-none bg-white px-2.5 py-1 text-sm font-normal leading-relaxed text-black outline outline-1 outline-borders-medium'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrandColorPicker
