<template>
    <h1>欢迎你：{{username}}</h1>
</template>
<script>
export default {
    name: 'main',
    data() {
        return {
            username: ''
        }
    }
}
</script>