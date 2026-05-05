import spawnerData from '@/data/index.json';
import { ref } from 'vue';

const data = ref(spawnerData);
const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const useSpawnItem = (count = 3) => {

    const generateItem = () => {
        const randomCategory = getRandomItem(data.value.categories);
        const randomSubcategory = getRandomItem(randomCategory.subcategories);
        const randomExample = getRandomItem(randomSubcategory.examples);

        return {
            category: randomCategory.name,
            subcategory: randomSubcategory.name,
            subject: randomExample,
        };
    };

    const spawnedItems = ref(
        Array.from({ length: count }, (_, i) => ({
            id: i,
            ...generateItem(),
        }))
    );

    const spawnItem = () => {
        spawnedItems.value = spawnedItems.value.map(item => ({
            ...item,
            ...generateItem(),
        }));
    };

    return { spawnedItems, spawnItem };
};

