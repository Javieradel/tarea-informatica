<template>
  <div class="menu">
    <h1>Creditos</h1>
    <h3>
      Estudiantes
    </h3>
    <p class="content">
        <span>Daxelis Perez 00#</span>  <span>Francys Gomez 11#</span>
        <span>Selena Mendoza 00#</span>  <span> Alberth Suarez 00#</span>
    </p>
    
    <h3>
      Supervisión
    </h3>
    <p>
      Javier Gomez<br/>
      <small>Analista de sistemas</small><br>
      <small>Programador</small><br/>
      <small>Técnico medio en Electrónica Industrial</small>
    </p>
    <router-link to="/menu">
      <div class="item">
        <img src="/assets/3creditos/atras.svg" alt="">
      </div>
    </router-link>
  </div>
</template>
<style scoped lang="scss">

  .menu{
    background-image: url('/assets/3creditos/trazo-de-marcador.svg');
    padding: 10px 5px 5px 5px;
    height: 100%;
    background-size: 100% 100%;
    h1{
      margin-top: 8px;
      margin-bottom: 0rem;
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
    .item{
      position: absolute;
      top:0;
    }
    h3{
      text-align: center;
      margin-bottom: 0px;
      margin-top:0 ;
      padding-bottom: 0;
      
    }
    p{
      text-align: center;
      margin: 0;
      small{
        font-style: italic;
        text-align: left;
      }
    }
    p.content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      span{
        display: block;
        margin: 5px 0;
      }
    }
  }
  </style>