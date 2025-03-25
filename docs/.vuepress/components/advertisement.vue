<template>
    <div class='advertisement' v-if="isShow">
        <div @click="isShow=false" style="position: absolute;right: 10px;cursor: pointer;">X</div>
        <div style="position: absolute;color: gray;cursor: default;left:5px;">广告</div>
        <img :src="imgUrl"/>
    </div>
</template>

<script>
import ad1 from '../public/ad1.png'
export default {
    data() {
        //这里存放数据
        return {
            imgs: [
                ad1
            ],
            isShow: false,
            imgUrl: ""
        };
    },
    methods: {
        getImgUrl() {
            if (this.imgs.length == 0) {
                this.isShow = false;
                this.imgUrl = "";
            } else {
                this.isShow = true;
                this.imgUrl = this.imgs[Math.floor((Math.random()*this.imgs.length))]
            }
        }
    },
    mounted() {
        this.getImgUrl();
    }
}
</script>

<style>
.advertisement {
    position: fixed;
    right: 0;
    bottom: 0;
    border: 1px solid gray;
}
</style>
