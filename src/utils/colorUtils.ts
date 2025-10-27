/**
 * Converts RGB values to hex color
 */
function rgbToHex(r: number, g: number, b: number): string {
  // eslint-disable-next-line no-bitwise
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Converts hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Generates default colors as fallback
 */
function generateDefaultColors(seriesLength: number): string[] {
  const defaultColors = [
    '#791142', // Brand color fallback
    '#F97316', // Orange
    '#10B981', // Green
    '#EF4444', // Red
    '#F59E0B', // Yellow
    '#8B5CF6', // Purple
    '#06B6D4', // Cyan
    '#EC4899', // Pink
  ]

  return defaultColors.slice(0, seriesLength)
}

/**
 * Convert RGB to HSL
 */
function rgbToHsl(
  r: number,
  g: number,
  b: number,
): { h: number; s: number; l: number } {
  const normalizedR = r / 255
  const normalizedG = g / 255
  const normalizedB = b / 255

  const max = Math.max(normalizedR, normalizedG, normalizedB)
  const min = Math.min(normalizedR, normalizedG, normalizedB)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case normalizedR:
        h =
          (normalizedG - normalizedB) / d + (normalizedG < normalizedB ? 6 : 0)
        break
      case normalizedG:
        h = (normalizedB - normalizedR) / d + 2
        break
      case normalizedB:
        h = (normalizedR - normalizedG) / d + 4
        break
      default:
        h = 0
        break
    }
    h /= 6
  }

  return { h: h * 360, s, l }
}

/**
 * Convert HSL to RGB
 */
function hslToRgb(
  h: number,
  s: number,
  l: number,
): { r: number; g: number; b: number } {
  const normalizedH = h / 360
  const hue2rgb = (p: number, q: number, t: number) => {
    let adjustedT = t
    if (adjustedT < 0) adjustedT += 1
    if (adjustedT > 1) adjustedT -= 1
    if (adjustedT < 1 / 6) return p + (q - p) * 6 * adjustedT
    if (adjustedT < 1 / 2) return q
    if (adjustedT < 2 / 3) return p + (q - p) * (2 / 3 - adjustedT) * 6
    return p
  }

  let r: number
  let g: number
  let b: number

  if (s === 0) {
    r = l
    g = l
    b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, normalizedH + 1 / 3)
    g = hue2rgb(p, q, normalizedH)
    b = hue2rgb(p, q, normalizedH - 1 / 3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

/**
 * Generates an array of colors based on the brand color and series length
 * Uses opacity variations to ensure all colors are visible
 * @param brandColor - The base brand color (hex format)
 * @param seriesLength - Number of series/colors needed
 * @returns Array of hex colors
 */
export function generateColorsFromBrand(
  brandColor: string,
  seriesLength: number,
): string[] {
  if (seriesLength <= 0) return []
  if (seriesLength === 1) return [brandColor]

  const rgb = hexToRgb(brandColor)
  if (!rgb) {
    // Fallback to default colors if brand color is invalid
    return generateDefaultColors(seriesLength)
  }

  const colors: string[] = []

  // Base opacity range (0.4 to 1.0) to ensure visibility
  const minOpacity = 0.4
  const maxOpacity = 1.0

  // Calculate opacity step
  const opacityStep =
    seriesLength > 1 ? (maxOpacity - minOpacity) / (seriesLength - 1) : 0

  for (let i = 0; i < seriesLength; i += 1) {
    let opacity: number

    if (seriesLength === 1) {
      opacity = 1.0
    } else {
      // Distribute opacity values evenly across the range
      opacity = maxOpacity - i * opacityStep
    }

    // Apply opacity to RGB values
    const adjustedR = Math.round(rgb.r * opacity + 255 * (1 - opacity))
    const adjustedG = Math.round(rgb.g * opacity + 255 * (1 - opacity))
    const adjustedB = Math.round(rgb.b * opacity + 255 * (1 - opacity))

    colors.push(rgbToHex(adjustedR, adjustedG, adjustedB))
  }

  return colors
}

/**
 * Alternative approach: Generate colors with hue variations
 * This creates colors with similar hue but different saturation/brightness
 */
export function generateHueVariations(
  brandColor: string,
  seriesLength: number,
): string[] {
  if (seriesLength <= 0) return []
  if (seriesLength === 1) return [brandColor]

  const rgb = hexToRgb(brandColor)
  if (!rgb) {
    return generateDefaultColors(seriesLength)
  }

  // Convert RGB to HSL for hue manipulation
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  const colors: string[] = []
  const hueStep = 30 // Degrees of hue variation

  for (let i = 0; i < seriesLength; i += 1) {
    const hueVariation = (i * hueStep) % 360
    const newHue = (hsl.h + hueVariation) % 360

    // Adjust saturation and lightness for better visibility
    const saturation = Math.max(0.6, hsl.s - i * 0.1)
    const lightness = Math.max(0.3, hsl.l - i * 0.05)

    const newRgb = hslToRgb(newHue, saturation, lightness)
    colors.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b))
  }

  return colors
}
