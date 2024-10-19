<template>
    <footer class="footer" id="contacts">
    <div class="container">
        <div class="footer-nav py30 py-m0 fx f-col f-m-row f-sb f-m">
           <router-link to="/" class="footer-logo">
                <img src="/img/c_logo.svg" alt="" class="logo-img">
            </router-link>

            <menu class="footer-menu fs12 fx f-m tn">
                <router-link to="/about" class="nav-link">About</router-link>
                <router-link to="/#services" class="nav-link">Services</router-link>
                <router-link to="/#portfolio" class="nav-link">Portfolio</router-link>
                <router-link to="/#contacts" class="nav-link">Contacts</router-link>
            </menu>

            <button  class="btn mt20 mt-m0" @click="_store.openPopup">Ask a Question</button>
        </div>
        <div class="footer-copy py20 t-center t-secondary fs12">
            <a href="#" class="copy-link">© 2024 Creative Coders. All Rights Reserved</a>
        </div>
    </div>
</footer>
</template>

<script setup>

import useStore from '../store'

const _store = useStore()





</script>