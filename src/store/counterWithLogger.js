import {create} from 'zustand';

const logMiddleware = (config) => (set, get, api) => config((args) => {
	console.log('State before update:', get());
	set(args);
	console.log('State after update:', get());
});

export const useCounterStore = create(logMiddleware((set) => ({
	count: 0,
	increment: () => set((state) => ({count: state.count + 1})),
	decrement: () => set((state) => ({count: state.count - 1}))
})));

