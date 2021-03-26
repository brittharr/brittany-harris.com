const DESC_LENGTH = 160;
export const formatDescription = (str) => str.replace(/\n/, '').slice(0, DESC_LENGTH);
