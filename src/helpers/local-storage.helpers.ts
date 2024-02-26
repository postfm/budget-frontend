export function getTokenFromLocalStorage(): string {
  const data = localStorage.getItem('token');
  const token = data ? JSON.parse(data) : '';

  return token;
}

export function setLocalStorage(key: string, token: string): void {
  localStorage.setItem(key, JSON.stringify(token));
}

export function removeFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
