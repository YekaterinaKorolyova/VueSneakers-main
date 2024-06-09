<script setup>
defineProps({
    totalPrice: Number
})

const emit = defineEmits(['toggleDrawer']) // Определяем функцию для передачи события toggleDrawer
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-8 py-8">
    <RouterLink to="/">
        <div class="flex items-center gap-4">
           
            
        
            <div>
              <img src="/Paris-logo2.jpeg" alt="" width="80" height="100" />
                <h2 class="text-xl font-serif uppercase">La suite de Paris</h2>
            
                <p class="text-slate-400 font-serif italic">Сlothes and accessories</p>
            
            </div>
           
    
        </div>
    </RouterLink>
    <ul class="flex items-center gap-10">
      
      <li
        @click="() => emit('toggleDrawer')"
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black font-serif"
      >
        <img src="/cart.svg" alt="" />
        
        <b>{{ totalPrice }} тенге</b>
      
      </li>
      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black font-serif">
       
        <img src="/heart.svg" alt="" />
       
        <RouterLink to="/favorites"><span>Закладки</span></RouterLink>
        
      </li>
      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black font-serif ">
      
        <img src="/profile.svg" alt="" />
     
        <RouterLink to="/profile"><span>Профиль</span></RouterLink>
        <!-- Текст элемента -->
      </li>
    </ul>
  </header>
</template>
