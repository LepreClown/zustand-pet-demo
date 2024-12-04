export const logMiddleware = (config) => (set, get, api) => config((args) => {
	console.log('State before update:', get());
	set(args);
	console.log('State after update:', get());
});
