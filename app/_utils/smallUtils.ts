export const getRandomNumber = () => Math.floor(Math.random() * 2);

export const delay = () => new Promise((r) => setTimeout(r, 10 * 1000));
