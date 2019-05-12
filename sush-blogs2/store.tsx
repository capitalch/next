const cache = {};

const store: any = {};
store.setCache = (key, value) => {
	cache[key] = value;
};
store.getCache = (key) => cache[key];
export { store };
