<template>
    <NavBar />

<section class="section about">
    <div class="container">
        <div class="fx">
            <div class="s-m3 d-none d-l-block">
                <p class="slogan pt30 ">My mission</p>
            </div>
            <div class="s-l9 t-light">
                <h2 class="about-title t-center t-l-left">About</h2>

                <div class="fx mt20">
                    <div class="s-m4 pr5">
                        <img src="/img/about.webp" alt="">
                    </div>
                    <div class="s-m8 pl20">
                        <div class="s-l7">
                            <p class="about-text">I'm a combat veteran with a lot of experience under my belt and know how to act clearly, quickly and efficiently - that's what you want from your website! Each task is thought through and analyzed to the smallest detail.
                            </p> 
                            <p class="about-text mt20">I know exactly how to make your project successful and will do my best because I don't look at the obstacles, only focus on the goal.
                            </p> 
                            <p class="about-text mt20">You will get a website that actually works and makes a profit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section steps">
    <div class="container">
        <div class="step-row fx f-m">
            <div class="s-m2 s-l3">
                <p class="step-num">01</p>
            </div>
            <div class="s-m4 s-l3">
                <h3 class="step-title fs10 fw600 t-upper t-light">Individual Approach</h3>
            </div>
            <div class="s-m6 pl-m20 mt10">
                <p class="step-text fs12">I thoroughly study your business, your goals, and your audience to create a website that fully meets your needs. I am always open to communication and ready to listen to your wishes and ideas.</p>
            </div>
        </div>
        <div class="step-row fx f-m">
            <div class="s-m2 s-l3">
                <p class="step-num">02</p>
            </div>
            <div class="s-m4 s-l3">
                <h3 class="step-title fs10 fw600 t-upper t-light">High Quality and Reliability</h3>
            </div>
            <div class="s-m6 pl-m20 mt10">
                <p class="step-text fs12">My experience and skills allow me to create websites that work flawlessly. I pay special attention to testing and debugging so that your site functions without glitches and problems. You can be sure that your site will be protected from technical issues.</p>
            </div>
        </div>
        <div class="step-row fx f-m">
            <div class="s-m2 s-l3">
                <p class="step-num">03</p>
            </div>
            <div class="s-m4 s-l3">
                <h3 class="step-title fs10 fw600 t-upper t-light">Support and Maintenance</h3>
            </div>
            <div class="s-m6 pl-m20 mt10">
                <p class="step-text fs12">After the project is completed, I do not leave you alone with your site. I provide support and maintenance services to keep your site always up-to-date and effective. Updates, improvements, and technical support – all this you get within our cooperation.</p>
            </div>
        </div>
    </div>
</section>

<section class="section choose">
    <div class="container fx">
        <div class="s-l3">
            <p class="slogan">Why choose me?</p>
        </div>
        <div class="s-l9 mt40 mt-l0">
            <div class="fx">
                <div class="s-m5 s-l4 offset-m4">
                    <p class="choose-text fs12">One of my main advantages is the experience I&nbsp;gained through life’s challenges.</p>
                </div>
            </div>
            <p class="choose-str t-upper t-light my20">I am a veteran of military operations, and this experience has taught me to value responsibility and attention to detail. When approaching each project, I put in maximum effort, strive to consider all nuances and client needs.</p>

            <img src="/img/choose.webp" alt="" class="choose-img">

            <div class="fx mt20">
                <div class="s-m5 s-l4 offset-m4">
                    <p class="choose-text fs12">I value the trust you place in me by choosing my services. In turn, I promise to put all my knowledge, experience, and effort into making your project successful and bringing you joy and profit.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section get-in">
    <div class="container fx">
        <div class="s-l3">
            <p class="slogan pt5">Get in touch</p>
        </div>
        <div class="s-l9 mt40 mt-l0">
            <h2 class="get-in-title t-center d-none d-m-block">Let's create <span class="get-in-str">something unique</span> together!</h2>

            <form v-if="!_store.successForm" action="" class="mt0 mt-m40">
                <div class="fx">
                    <div class="s-m4 pr-m15">
                        <input type="text" class="form-input" placeholder="Name">
                    </div>
                    <div class="s-m4 px-m15 mt10 mt-m0">
                        <input type="text" class="form-input" placeholder="Email">
                    </div>
                    <div class="s-m4 pl-m15 mt10 mt-m0">
                        <input type="text" class="form-input" placeholder="Phone">
                    </div>
                </div>
                <div class="mt10 mt-m30">
                    <textarea class="form-input" placeholder="Your message"></textarea>
                </div>

                <div class="mt10 mt-m30">
                    <button @click="_store.successForm = true" type="button" class="btn btn-dark t-upper w100">Send a message</button>
                </div>
            </form>

            <div v-else class="t-center py60 py-m100">
                <h3 class="popup-thanks mb20 mb-m30">Thank you for your enquiry!</h3>
                <p class="t-secondary fs10">We will get back to you within two hours.</p>
            </div>
        </div>
    </div>
</section>

</template>


<script setup>

import NavBar from '../components/NavBar.vue'
import useStore from '../store'

const _store = useStore()

window.scrollTo(0, 0)


</script>