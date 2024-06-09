<template>
    <footer class="flex justify-between center rounded-xl">
    <div class="footer-section">
      <h3 class="text-slate-400 font-serif cursor-pointer opacity-100 hover:opacity-30 transition">О нас</h3>
      <h3 class="text-slate-400 font-serif cursor-pointer opacity-100 hover:opacity-30 transition">Наши магазины</h3>
      <h3 class="text-slate-400 font-serif cursor-pointer opacity-100 hover:opacity-30 transition">Контакты</h3>
        
    </div>
      <div class="footer-section">
        
      <h3 class="text-slate-400 font-serif cursor-pointer opacity-100 hover:opacity-30 transition">Служба поддержки</h3>
    
      </div>
      <div class="footer-section">
      <h3 class="text-slate-400 font-serif cursor-pointer opacity-100 hover:opacity-30 transition">Часто задаваемые вопросы</h3>
        
      </div>
      <div class="footer-section">
        <h3 class="text-slate-400 font-serif cursor-pointer opacity-100 hover:opacity-30 transition">Социальные сети</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <img src="/FB-logo.jpeg" alt="" width="50" height="50" />
          <li><a href="#">Instagram</a></li>
          <img src="/insta-logo.jpeg" alt="" width="45" height="45" />
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Footer',
    setup() {
      // Здесь можно добавить логику, если это необходимо
  
      return {
        // Возвращаемые значения, если есть
      };
    },
  };
  </script>
  
  <style>
  .footer {
    display: flex;
    justify-content: space-around;
    background-color: rgb(226 232 240);
    color: text-gray-500;
    padding: 20px 0;
  }
  
  .footer-section {
    flex: 1;
    margin: 0 20px;
  }
  
  .footer-section h3 {
    font-size: 18px;
  }
  
  .footer-section p {
    font-size: 14px;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 5px;
  }
  
  .footer-section ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  </style>
  