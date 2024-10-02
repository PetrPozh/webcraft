import { defineStore } from 'pinia'

export default defineStore('store', {
  state: () => {
    return {
      popup: false,
      successForm: false,
      menu: false
    }
  },
  actions: {
    openPopup() {
      this.popup = true
      this.successForm = false
      document.body.style.overflow = 'hidden'
    },
    closePopup() {
      this.popup = false
      document.body.style.overflow = 'visible'
    },
    openMenu() {
      this.menu = true
      document.body.style.overflow = 'hidden'
    },
    closeMenu() {
      this.menu = false
      document.body.style.overflow = 'visible'
      
    },
    scrollPage(Id)
    {
      setTimeout(() => {
        const offset = document.getElementById(Id).offsetTop

        window.scrollTo({
          top: offset,
          behavior:'smooth'
        })
      }, 500)

      this.closeMenu()
    }
  }
})