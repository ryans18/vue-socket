<template>
    <div>
        <h2>您尚未登录，请扫码登录</h2>
        <button class="btn" @click="isShowQr=true">登录</button>
        <div>
            <qr-code-socket v-show="isShowQr"/>
        </div>
    </div>
</template>

<script>
import QrCodeSocket from '@/components/QRCodeSocket.vue';
export default {
    name:'Login',
    components: {
        QrCodeSocket
    },
    data() {
        return {
            isShowQr: false
        }
    }
}
</script>
