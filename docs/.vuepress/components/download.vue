<template>
    <div class="download__button" @click="onClickButton">安装{{currentVersion}}版本</div>
</template>

<script>
export default {
    data() {
        //这里存放数据
        return {
            currentVersion: "2025.04.09.01"
        };
    },
    methods: {
        onClickButton() {
            window.open(`https://src.douyuex.com/src/douyuex.user.js?t=${new Date().getTime()}`);
        }
    },
}
</script>

<style>
.download__button {
    transition: box-shadow .2s;
    display: inline-block;
    background-color: #005200;
    padding: .8rem 1.2rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
}
.download__button:hover {
    transition: box-shadow .2s;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
}
</style>