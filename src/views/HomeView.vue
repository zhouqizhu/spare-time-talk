<script setup lang="ts">
    import get from "../request"
    import RandomCard from "../components/RandomCard.vue"
    import { ref } from "@vue/reactivity"

    const showCard = ref(false)
    const getJokes = () => {
        return showCard.value = true
    }
    const getEmojis = () => {}
    const getColdKnowledge = () => {}
    const getDJT = () => {}
</script>

<template>
    <div class="random">
        <div class="buttom-container">
            <button class="sgetJokes" @click="getJokes">笑话</button>
            <button class="sgetEmojis" @click="getEmojis">表情包</button>
            <button class="sgetColdKnowledge" @click="getColdKnowledge">冷知识</button>
            <button class="sgetDJT" @click="getDJT">毒鸡汤</button>
        </div>
    </div>
    <div class="showCard">
        <RandomCard v-if="showCard"></RandomCard>
        <div v-else>1</div>
    </div>
</template>

<style lang="scss" scoped>
    .random {
        position: relative;
    }
    button {
        margin: .2rem;
        font-size: .3rem;
        border: .03rem solid black;
        padding: .13rem .3rem .13rem;
        letter-spacing: .1rem;
        position: relative;
        background-color: rgba(0, 0, 0, 0);   
    }
    button::after {
        content: '';
        background-color: aqua;
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: .1rem;
        left: .1rem;
    }
    button:hover::after {
        top: 0;
        left: 0;
    }
    .sgetJokes::after {
        background-color: #dcbaff;
    }
    .sgetEmojis::after {
        background-color: rgba(75, 237, 104, 0.667);
    }
    .sgetColdKnowledge::after {
        background-color: rgba(233, 185, 43, 0.667);
    }
    .sgetDJT::after {
        background-color: rgb(238, 63, 150);
    }

    .showCard {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
