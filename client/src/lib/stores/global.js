import {writable} from 'svelte/store';

export const viewportHeight = writable('0px')
export const viewportWidth = writable('0px')
export const element = writable('')