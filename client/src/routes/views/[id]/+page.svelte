<script lang="ts">
    
    import type {PageData} from './$types';
    import {viewportHeight, viewportWidth} from '$lib/stores/global'
	import { onMount } from 'svelte';
    import io from 'socket.io-client';
	import {axios} from '$lib/utils/axios.utils';
	import { SCREEN_COUNT } from '$lib/config/config';

    const socket = io('http://localhost:8081')

    socket.emit('connection')

    export let data: PageData;
    
    let innerHeight: number;
    let innerWidth: number;
    $: useHeight = $viewportHeight
    $: useWidth = $viewportWidth

    let image: string;
    
    viewportHeight.subscribe(value => {
        useHeight = value
    })
    
    viewportWidth.subscribe(value => {
        useWidth = value
    })
    
    onMount(async() => {
        socket.on('image_update', async() => {
        image = (await axios.get('/image'))['data']['image']
            setTimeout(() => {
                $: {
                    location.reload()
                }
            }, 500)
        })
        await axios.post('/resolution', {height: innerHeight, width: innerWidth, screens: SCREEN_COUNT})
        console.log("sent res!")
        image = (await axios.get(`/image/${data.id}`))['data']['image']
        console.log(image)
        viewportHeight.set(`${innerHeight}px`)
        viewportWidth.set(`${innerWidth}px`)
    })
    
</script>
<!-- <h1>{Number(data.id)+ sockPresses}</h1> -->
<img src={image} alt="Anime thingy" style={`height: ${useHeight}; width: ${useWidth}`} />
<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />