<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Home from './Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    const route = useRoute()
    const title = ref('')
    const img = ref('')
    const price = ref('')
    const addToCart = ref('')
    const isAdded = ref('')

    const updateData = () => {
      title.value = route.query.title || ''
      img.value = route.query.img || ''
      price.value = route.query.price || ''
      addToCart.value = route.query.onclickAdd || ''
      isAdded.value = route.query.isAdded || ''
    }

    onMounted(() => {
      updateData()
    })

    watch(
      () => route.query,
      () => {
        updateData()
      }
    )

    return {
      title,
      img,
      price,
      addToCart,
      isAdded
    }
  }
}
</script>

<template>
  <div class="item-content">
    <img :src="img" :alt="title" />
    <div class="item-content-info">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
      <h2>Цена: {{ price }}</h2>
      <img @click="addToCart" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" />
    </div>
  </div>
  <Home />
</template>

<style scoped>
.item-content {
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #675f5f21;
  

  & > img {
    object-fit: contain;
    height: 200px;
    width: 200px;   /* размеры большой карточки */
  }
}
.item-content-info {
  padding: 0 0 0 15px;   /* это межбуквенное расстояние */
  line-height: 45px;   /* это межстрочное расстояние */
  

  & > h1 {
    font-size: 15px;    /* это наименование товара  */
  }
  
  


  & > h2 {
    font-size: 15px;  /* это цена товара  */
  }

  & > img {
    height: 50px;
    width: 50px;
  }
}
</style>