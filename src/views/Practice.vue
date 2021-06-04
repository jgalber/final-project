<template>
<div class="home">
    <img @click="getData" src="../assets/logo.png" alt="Vue logo">
    {{ list }}
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            list: []
        }
    },
    methods : {
        getData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                return response.json()
                // throw new Error("something went wrong w response")
            })
            .then((json) => {
                console.log(json)
                this.list = json
            })
            .catch( err => {
                
            })
        }
    }
}
</script>