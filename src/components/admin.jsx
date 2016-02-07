export const checkAdmin = (location) => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.location.hostname.match(/^admin\./) !== null;
};
