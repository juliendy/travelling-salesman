import { cubicInOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { writable, readable } from 'svelte/store';

// animation positions
export const positionSalesman = tweened(-14, { duration: 2000, easing: cubicInOut });

// game state
export const start = writable(false);
export const finish = writable(false);
export const sales = writable(0);
export const currentHouse = writable(0);
export const houses = readable([
	{
		id: '01',
		question: `Seems like and old lady lives here. What will you try to sell?`,
		answers: [
			{ answer: 'Woolen socks', icon: '🧦', amount: 2 },
			{ answer: 'Toilet papaer', icon: '🧻', amount: 10 }
		],
		salesManPosition: -8
	},
	{
		id: '02',
		question: `You hear someone praying. What will you try to sell?`,
		answers: [
			{ answer: 'Bibles', icon: '📚', amount: 15 },
			{ answer: 'Insurance', icon: '📜', amount: 30 }
		],
		salesManPosition: 8
	},
	{
		id: '03',
		question: `You hear kids playing inside. What action-figure will you try to sell?`,
		answers: [
			{ answer: 'Chuck Norris', icon: '🧔🏽', amount: 8 },
			{ answer: 'Batman', icon: '🦇', amount: 5 }
		],
		salesManPosition: 16
	}
]);