export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getNumberInRange = (min, max) => {
  const prevValues = [];

  return () => {
    let currentValue = min;

    if (prevValues.length >= max - min + 1) {
      return null;
    }

    while (prevValues.includes(currentValue)) {
      currentValue++;
    }

    prevValues.push(currentValue);

    return currentValue;
  };
};

export const getSequentialNumbers = () => {
  let currentValue = 0;

  return () => {
    currentValue += 1;
    return currentValue;
  };
};

export const getRandomNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const getRandomArrayElement = (elements) =>
  elements[Math.floor(Math.random() * elements.length)];

const fetchNamesFromPlaceholder = async (count) => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    const comments = data.slice(0, count).map((user) => user.name);
    const emails = data.slice(0, count).map((user) => user.email);
    return { comments, emails };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const initData = async (count) => await fetchNamesFromPlaceholder(count);
