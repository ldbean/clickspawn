import data from '@/data/index.json'

const animal = data.categories[0]
const plant = data.categories[1]
const mineral = data.categories[2]
const mech = data.categories[3]
const tech = data.categories[4]
const fabric = data.categories[5]
const mood = data.categories[6]
const setting = data.categories[7]


export const useFindCategory = (cat) => {
    const categories = data.value.categories
    return categories.findIndex(c => c.name === cat)
}
