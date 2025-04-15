<template>
    <div class="footer-container">
        <p>© 2025 SmartCru Tech. <br> All rights reserved. Unauthorized reproduction or distribution is prohibited.</p>
    </div>
</template>

<script>
export default{
    name: "FooterComp",
}
</script>

<style scoped>
    .footer-container{
        position: relative;
        bottom: 0;
        display: flex;
        margin-top: 20px;
        width: 100%;
        background: #DCDCDC;
        color: black;
    }
    .footer-container p{
        text-align: center;
        margin: 10px auto;
    }
</style>