<template>
    <div class="header-nav">
    <div class="container fx f-sb f-m">
        <div class="s10 s-m5 s-x6">
            <router-link @click="_store.closeMenu" to="/" class="header-logo">
                <img src="/img/c_logo.svg" alt="" class="logo-img">
            </router-link>
        </div>
        <div class="s2 s-m7 s-x6 pl-m20">
            <nav class="t-upper fs12 fx f-m f-e f-m-sb f-l-s tn">
                <div v-if="!_store.menu" class="nav-menu d-none d-l-block">
                    <router-link to="/about" class="nav-link">About</router-link>
                    <router-link @click="_store.scrollPage('services')" to="/#services" class="nav-link">Services</router-link>
                    <router-link @click="_store.scrollPage('portfolio')" to="/#portfolio" class="nav-link">Portfolio</router-link>
                    <router-link @click="_store.scrollPage('contacts')" to="/#contacts" class="nav-link">Contacts</router-link>
                </div>

                <div v-if="_store.menu" class="mob-menu">
                    <router-link @click="_store.closeMenu" to="/about" class="nav-link">About</router-link>
                    <router-link @click="_store.scrollPage('services')" to="/#services" class="nav-link">Services</router-link>
                    <router-link @click="_store.scrollPage('portfolio')" to="/#portfolio" class="nav-link">Portfolio</router-link>
                    <router-link @click="_store.scrollPage('contacts')" to="/#contacts" class="nav-link">Contacts</router-link>

                    <div class="mt60 t-center">
                        <a href="#" target="_blank"><img src="/img/fb.webp" alt="" class="popup-social"></a>
                        <a href="#" arget="_blank"><img src="/img/inst.webp" alt="" class="popup-social"></a>
                        <a href="#" arget="_blank"><img src="/img/tg.webp" alt="" class="popup-social"></a>
                        <a href="#" arget="_blank"><img src="/img/link.webp" alt="" class="popup-social"></a>
                    </div>
                </div>

                <a v-if="!_store.menu" @click="_store.openPopup" class="get-link fw600 fx f-m ml20 tn">Get in touch 
                    <img src="/img/arrow-ou.webp" alt="" class="icon-img ml5">
                </a>

                <img v-if="!_store.menu" src="/img/icon_menu.webp" @click="_store.openMenu" class="menu-btn">
                <img v-else src="/img/close.webp" @click="_store.closeMenu" class="menu-close">
            </nav>
        </div>            
    </div>
</div>
</template>

<script setup>

import useStore from '../store'

const _store = useStore()





</script>