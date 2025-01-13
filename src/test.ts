export function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookiesArray = cookieString.split("; "); // Split cookies into key-value pairs
  for (const cookie of cookiesArray) {
    const [key, value] = cookie.split("="); // Split key and value
    if (key === name) {
      return decodeURIComponent(value); // Decode and return the cookie value
    }
  }
  return null; // Return null if the cookie doesn't exist
}

// Example usage
