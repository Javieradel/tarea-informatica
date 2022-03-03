<template>
  <div class="menu">
    <h1>CalcExcel</h1>
    <nav class="menu-list">
      <div @click="showModal=true" class="btn"><span>Jugar</span></div>
      <div class="btn"><span>Records</span></div>
      <router-link to="/tutorial">
        <div class="btn"><span>Reglas</span></div>
      </router-link>
    </nav>
    <nav class="nav marked-bg">
      <router-link to="/credito">
        <div class="item">
          <img src="/assets/1inicio/Group-9.svg" alt="">
        </div>
      </router-link>
      <router-link to="/exit">
        <div @click="close" class="item">
          <img src="/assets/1inicio/Group-10.svg" alt="">
        </div>
      </router-link>

    </nav>
  </div>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modal :show="showModal" @close="showModal=false" >
      <template #header>
        <h3>Jugadores</h3>
      </template>
      <template #body>
        <div class="user-container">
          <div class="user btn" v-for="(user,index) in users" :key="index">
          <router-link :to="`/play/${user.id}`" >
            {{user.name}}
          </router-link>
          </div>
        </div>
      </template>
    </Modal>
  </Teleport>
</template>
<script setup>
import Modal from './modal.vue'
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'
const showModal = ref(false)
const store = useStore();
const users = store.state.users

  function close(){
    window.close()
  }

</script>
<style scoped lang="scss">

  .menu{
    padding: 10px 5px 5px 5px;
    h1{
      margin-top: 8px;
      margin-bottom: .5rem;
      text-align: center;
    }
    .menu-list{
      display:flex;
      flex-direction: column;
      align-items: center;
      .btn{
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        span{
          display: block;
        }
      }
    }
    nav.nav{
      box-sizing: border-box;
      display: flex;
      padding: 8px;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      width: 78px;
      height: 127px;
      position: absolute;
      bottom: 0px;
      right: 0;
    }
    .marked-bg{
      background-image: url('/assets/1inicio/trazo-de-marcador.svg');
    }
  }
.user-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .user{
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 5px 0;
      text-align: center;
      a{
        display: block;
        height: 14px;
        color: black;
        font-size: 16px;
        text-decoration: none;
      }
    }
}
</style>