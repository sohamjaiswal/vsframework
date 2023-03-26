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


<h1>Controller!</h1>

<button on:click={handleButtPress}>
    Switch Image
</button>