const localStorage = {
  write: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  read: (key) => JSON.parse(window.localStorage.getItem(key))
};

export default localStorage;
