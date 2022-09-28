<template>
    <div class="saved-container">
        <button class="slookJokes" @click="lookJokes">笑话</button>
        <button class="slookEmojis" @click="lookEmojis">表情包</button>
        <button class="slookColdKnowledge" @click="lookColdKnowledge">冷知识</button>
        <button class="slookDJT" @click="lookDJT">1毒鸡汤</button>
    </div>
</template>

<style lang="scss" scoped>
    button {
        margin: .3rem;
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
    .slookJokes::after {
        background-color: #dcbaff;
    }
    .slookEmojis::after {
        background-color: rgba(75, 237, 104, 0.667);
    }
    .slookColdKnowledge::after {
        background-color: rgba(233, 185, 43, 0.667);
    }
    .slookDJT::after {
        background-color: rgb(238, 63, 150);
    }
</style>
