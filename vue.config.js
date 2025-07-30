// If using Vite (most common for Vue 3)
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: 'SmartCru' // Replace with your actual repo name
})

// If using Vue CLI (Vue 2 or older Vue 3 projects)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'SmartCru'
    : '/'
}