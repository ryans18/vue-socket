<template>
    <div>
        <vue-qr text='QR:PC1' :size='200'/>
    </div>
</template>
<script>
import vueQr from 'vue-qr';
import { setToken } from '@/utils/auth';
export default {
    name: 'QrcodeSocket',
    components: {
        vueQr
    },
    data () {
        return {
            path:"ws://127.0.0.1:8088/ws/login/PC1",
            socket:""
        }
    },
    mounted () {
        // 初始化
        this.init()
    },
    methods: {
        init(){
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path)
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
            }
        },
        open(){
            console.log("socket连接成功")
        },
        error() {
            console.log("连接错误")
        },
        getMessage(msg) {
            console.log(msg.data)
            setToken(msg.data)
            this.$router.push({ path: '/main' })
        },
        send() {
            this.socket.send("fafa")
        },
        close() {
            console.log("socket已经关闭")
        }
    },
    destroyed () {
        // 销毁监听
        this.socket.onclose = this.close
    }
}
</script>