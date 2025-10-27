/**
 * Formats a date string to MM/DD/YYYY format
 * Handles various input formats and provides fallback for invalid dates
 * @param dateString - The date string to format
 * @param options - Optional formatting options
 * @returns Formatted date string in MM/DD/YYYY format or original string if invalid
 */
export function formatDate(
  dateString: string | null | undefined,
  options?: {
    fallback?: string
    format?: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD'
  },
): string {
  if (!dateString) {
    return options?.fallback || ''
  }

  try {
    // First try to parse as a standard date
    const date = new Date(dateString)
    if (!Number.isNaN(date.getTime())) {
      const format = options?.format || 'MM/DD/YYYY'

      switch (format) {
        case 'MM/DD/YYYY':
          return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          })
        case 'DD/MM/YYYY':
          return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        case 'YYYY-MM-DD':
          return date.toISOString().split('T')[0]
        default:
          return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          })
      }
    }

    // If standard parsing fails, try to parse from DD/MM/YYYY format
    const parts = dateString.split('/')
    if (parts.length === 3) {
      const [day, month, year] = parts
      const parsedDate = new Date(`${year}-${month}-${day}`)

      if (!Number.isNaN(parsedDate.getTime())) {
        const format = options?.format || 'MM/DD/YYYY'

        switch (format) {
          case 'MM/DD/YYYY':
            return `${month}/${day}/${year}`
          case 'DD/MM/YYYY':
            return `${day}/${month}/${year}`
          case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`
          default:
            return `${month}/${day}/${year}`
        }
      }
    }

    // If all parsing fails, return the original string or fallback
    return options?.fallback || dateString
  } catch {
    // If any error occurs, return the original string or fallback
    return options?.fallback || dateString
  }
}

/**
 * Formats a date string for display in "Last Updated" sections
 * @param dateString - The date string to format
 * @returns Formatted date string with "Last Updated:" prefix
 */
export function formatLastUpdatedDate(
  dateString: string | null | undefined,
): string {
  const formattedDate = formatDate(dateString)
  return formattedDate ? `Last Updated: ${formattedDate}` : ''
}

/**
 * Formats a date string for display in footer sections
 * @param dateString - The date string to format
 * @returns Formatted date string without prefix
 */
export function formatFooterDate(
  dateString: string | null | undefined,
): string {
  return formatDate(dateString, { fallback: '' })
}
