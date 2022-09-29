<script setup>
import { useHead } from '@vueuse/head'
// appHead
const siteData = reactive({
  title: 'Meimaij 鎂麥寵物鮮食',
  description: '鎂麥提供雞牛肉鮮食、乾糧、零食給狗狗',
})

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    { name: 'description', content: computed(() => siteData.description) },
    { property: 'og:title', content: 'Meimaij 鎂麥寵物鮮食' },
    { property: 'og:description', content: siteData.description },
    {
      property: 'og:image',
      content:
        'https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1625978530865.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EFPGqJvSEcM1Ji28bYAUpUHWw1o7WhhJ4WsBroB83r7oWwbsruXqg1oPMJbFjpcQRWFKIwQEnPxUx%2FKKLjcrX9y8Nvmgsg3Hu%2BRQfy24oxI78UwWbnj6O6%2BMsgWhp%2FA5HowvyDRT6j4YzQgutaXOyuvcdX4ha3UpqjlP7wEKCb3AtymR8CFKUOsFUWxeJZ3FXZd8tFR7zNiqfcz81PZyto1bVpUm9z0YkUBQYhO57iOOgtljeCSMnBZ5OOaIS%2Fk%2BhsxUxjdYS8MVPpWUHjkJBPR0QaHw6woxef7inL19PFuQlithbV6voHVUw4LXz%2B%2B3yokU4IECsSOqhkae7w%2FP6g%3D%3D',
    },
  ],
})
</script>

<template></template>

<style lang="scss"></style>
