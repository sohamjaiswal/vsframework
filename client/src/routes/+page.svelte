<script lang="ts">
    import io from 'socket.io-client';

    const socket = io('http://localhost:5001')

    const handleButtPress = () => {
        socket.emit('con_pressed')
    }
</script>


<h1>Controller!</h1>

<button on:click={handleButtPress}>
    LOL
</button>