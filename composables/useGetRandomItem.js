export const useGetRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
