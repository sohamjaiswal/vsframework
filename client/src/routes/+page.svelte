<script lang="ts">
	import axios  from 'axios';
    import io from 'socket.io-client';

    const socket = io('http://localhost:8081')

    let toggle = true
    const handleButtPress = () => {
        toggle = !toggle
        let image = 0
        if (toggle) {
            image = 2
        } else {
            image = 1
        }
        axios.post('http://192.168.1.3:8080/image', {image})
    }
</script>


<div class="center">
    <h1>Controller! (Gallery View)</h1>
    
    <button on:click={handleButtPress}>
        Switch Image
    </button>
</div>

<style lang="scss">
    .center {
        font-family: 'Courier New', Courier, monospace;
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        button {
            outline: none;
            padding: 1rem 2rem;
            background-color: rgb(255, 114, 114);
            color: white;
            border-radius: 2rem;
        }
    }
</style>