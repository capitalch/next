const cache = {}

const store = {};
store.setCache = (key, value) => {
    cache[key] = value
}
store.getCache = (key) => cache[key]
export { store}