export const checkAdmin = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.location.hostname.match(/^admin\./) !== null;
};
