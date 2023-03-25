<script lang="ts">
    
    import type {PageData} from './$types';
    import {viewportHeight, viewportWidth} from '$lib/stores/global'
	import { onMount } from 'svelte';
    import io from 'socket.io-client';

    const socket = io('http://localhost:5001')

    socket.emit('connection')

    export let data: PageData;
    
    let innerHeight: number;
    let innerWidth: number;
    let useHeight: string;
    let useWidth: string;

    $: sockPresses = 0;

    socket.on('send_con_pressed', (data) => {
        sockPresses += 1
    })
    
    viewportHeight.subscribe(value => {
        useHeight = value
    })
    
    viewportWidth.subscribe(value => {
        useWidth = value
    })
    
    onMount(() => {
        if (data.id === '1') {
            console.log('entered this', innerHeight, innerWidth)
            viewportHeight.set(`${innerHeight}px`)
            viewportWidth.set(`${innerWidth}px`)
            console.log(useHeight, useWidth)
        } else {
            console.log()
        }
    })
    
</script>
<h1>{Number(data.id)+ sockPresses}</h1>
<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />