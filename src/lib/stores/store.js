import { cubicInOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { writable } from 'svelte/store';

// animation positions
export const positionSalesman = tweened(-8, { duration: 2000, easing: cubicInOut });
