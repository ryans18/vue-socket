<template>
    <div>
        <h2>您尚未登录，请扫码登录</h2>
        <div>
            <qr-code-socket/>
        </div>
    </div>
</template>

<script>
import QrCodeSocket from '@/components/QRCodeSocket.vue';
export default {
    name:'Login',
    components: {
        QrCodeSocket
    }
}
</script>
