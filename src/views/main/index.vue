<template>
    <div>
        <button class="logout" @click="logout">Logout</button>
        <h2>欢迎你：{{username}}</h2>
    </div>
</template>
<script>
import { removeToken } from '@/utils/auth';
import { getUser }  from '@/api/user';
export default {
    name: 'main',
    data() {
        return {
            username: ''
        }
    },
    created() {
        console.log('mounted')
        this.getUserInfo()
    },
    methods: {
        logout() {
            removeToken()
            this.$router.push({ path: '/login' })
        },
        getUserInfo() {
            getUser().then(
                res => {
                    console.log(res);
                    this.username = res.username
                }, 
                error => {
                    console.log(error);
                }
            )
        }
    }
}
</script>
<style scoped>
.logout {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 5px 10px;
}

</style>