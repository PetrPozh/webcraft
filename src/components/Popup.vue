<template>
     <div class="popup-overlay">
        <div class="popup-wrap">
            <div class="popup">
                <div class="popup-head">
                    <img src="/img/close.webp" @click="_store.closePopup" class="popup-close">
                </div>
                <div v-if="!_store.successForm">
                    <h3 class="popup-title t-center mb30 mb-m40">Get in touch</h3>

                    <form action="">
                        <div class="fx">
                            <div class="s-m6 pr-m10">
                                <input type="text" class="form-input" placeholder="Name">
                            </div>
                            <div class="s-m6 pl-m10 mt10 mt-m0">
                                <input type="text" class="form-input" placeholder="Business">
                            </div>
                        </div>
                        <div class="fx mt0 mt-m20">
                            <div class="s-m6 pr-m10 mt10 mt-m0">
                                <input type="text" class="form-input" placeholder="Email">
                            </div>
                            <div class="s-m6 pl-m10 mt10 mt-m0">
                                <input type="text" class="form-input" placeholder="Phone">
                            </div>
                        </div>
                        <div class="mt10 mt-m20">
                            <textarea class="form-input" placeholder="Your message"></textarea>
                        </div>
                        <div class="mt10 mt-m20 t-center">
                            <button @click="_store.successForm = true" type="button" class="btn btn-primary">Ask a Question</button>
                        </div>
                    </form>
    
                    <div class="mt60 t-center">
                        <a href="#"><img src="/img/fb.webp" alt="" class="popup-social"></a>
                        <a href="#"><img src="/img/inst.webp" alt="" class="popup-social"></a>
                        <a href="#"><img src="/img/tg.webp" alt="" class="popup-social"></a>
                        <a href="#"><img src="/img/link.webp" alt="" class="popup-social"></a>
                    </div>
                </div>

                <div v-else class="t-center py60 py-m100">
                    <h3 class="popup-thanks mb20 mb-m30">Thank you for your enquiry!</h3>
                    <p class="t-secondary fs10">We will get back to you within two hours.</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

import useStore from '../store'

const _store = useStore()





</script>