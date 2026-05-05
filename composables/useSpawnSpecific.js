import spawnerData from '@/data/index.json';

export const useSpawnSpecific = (category, count = 3) => {

    const generateItem = () => {
        const randomSubcategory = useGetRandomItem(category.subcategories);
        const randomExample = useGetRandomItem(randomSubcategory.examples);

        return {
            category: category.name,
            subcategory: randomSubcategory.name,
            subject: randomExample,
        };
    };

    const spawnedSpecItems = ref(
        Array.from({ length: count }, (_, i) => ({
            id: i,
            ...generateItem(),
        }))
    );

    const spawnSpecItem = () => {
        spawnedSpecItems.value = spawnedSpecItems.value.map(item => ({
            ...item,
            ...generateItem(),
        }));
    };

    return { spawnedSpecItems, spawnSpecItem };
}
