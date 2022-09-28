<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>
  
<template>
    <header>
        <h1 class="headerTitle">spare-time-talk</h1>
        <p>一个消遣时间的网页</p>
        <div class="wrapper">
            <nav>
                <RouterLink class="buttonStyle" to="/">随机娱乐项目</RouterLink>
                <RouterLink class="buttonStyle" to="/saved">已保存项目</RouterLink>
            </nav>
        </div>
    </header>
  
    <RouterView />
</template>
  
<style lang="scss" scoped>
    .wrapper {
        width: 100%;
    }
    .buttonStyle {
        margin: .5rem;
        padding: .1rem;
        display: inline-block;
        border: .03rem solid #333;
        width: 25%;
        font-size: .5rem;
        border-radius: 15% 4% 16% 8% / 15% 4% 10% 8%;
        background: #fff;
        position: relative;
        &::before {
            content: '';
            border: .03rem solid #353535;
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
            border-radius: 1% 3% 5% 7% / 1% 3% 5% 7%;
        }
    }
    p {
        font-size: .3rem;
    }
    nav a.router-link-exact-active {
        color: var(--color-text);
    }
    
    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }
    
    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }
    
</style>
  