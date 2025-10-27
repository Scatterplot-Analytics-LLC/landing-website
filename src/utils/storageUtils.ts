import Cookies from 'js-cookie'

// Check if cookies are available (they typically always are, so this is optional)
const checkIfCookiesAvailable = () => {
  try {
    Cookies.set('__test__', 'test')
    Cookies.remove('__test__')
    return true
  } catch {
    return false
  }
}

// Set item in cookies
export const setCookieItem = (key: string, value: string, options = {}) => {
  if (checkIfCookiesAvailable()) {
    // Set cookie with options (e.g., expiry, secure)
    Cookies.set(key, value, {
      expires: 7, // 7 days expiry by default
      // secure: true, //TODO: Uncomment this line when we'll have https on instances
      sameSite: 'Strict',
      ...options,
    })
  }
  return null
}

// Get item from cookies
export const getCookieItem = (key: string) => {
  if (checkIfCookiesAvailable()) {
    return Cookies.get(key) || null
  }
  return null
}

// Remove item from cookies
export const removeCookieItem = (key: string) => {
  if (checkIfCookiesAvailable()) {
    Cookies.remove(key)
  }
  return null
}
