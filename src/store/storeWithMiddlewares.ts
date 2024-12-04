import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface CounterState {
	count: number;
	increment: () => void;
	decrement: () => void;
}


// Save to localstorage
export const useCounterWithStorageStore = create<CounterState>()(persist((set) => ({
	count: 0,
	increment: () => set((state) => ({count: state.count + 1})),
	decrement: () => set((state) => ({count: state.count - 1}))
}), {
	name: "counter-save-to-storage"
}));

// With devtools
export const useCounterWithDevtoolsStore = create<CounterState>()(devtools((set) => ({
	count: 0,
	increment: () => set((state) => ({count: state.count + 1})),
	decrement: () => set((state) => ({count: state.count - 1}))
	
})));
