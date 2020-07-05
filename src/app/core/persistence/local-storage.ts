export const loadFromLs = (key: string): unknown => {
  const serializedState = localStorage.getItem(key);
  if (!serializedState || serializedState === '') {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const saveToLs = (key: string, state: { [key: string]: unknown }) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(key, serializedState);
};

export const loadFromSessionStorage = (key: string): unknown => {
  const serializedState = sessionStorage.getItem(key);
  if (!serializedState || serializedState === '') {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const saveToSessionStorage = (key: string, state: { [key: string]: unknown }) => {
  const serializedState = JSON.stringify(state);
  sessionStorage.setItem(key, serializedState);
};
