<template>
  <footer style="background-color: #90CAF9" margin-top="90em">
    <div class="navbar" style="background-color: #90CAF9">
     
        
     
      
     <router-link
       class="active"
       v-if="$store.state.role === 'admin'"
       to="/Trabajadores"
       >{{ $t("header.search.caption4") }}</router-link
     >

     <router-link
       class="pacientes"
       v-if="$store.state.role === 'admin'"
       to="/Pacientes"
       >{{ $t("header.search.caption9") }}</router-link
     >

<!--<router-link class="especialidades" to="/">ESPECIALIDADES</router-link>
     <router-link class="area" to="/Login"
       ><img class="user" src="../../assets/user.png" /> ÁREA
       RESERVADA</router-link
     >-->     
  <router-link
       class="active"
       v-if="$store.state.role === 'userTrabajador'"
       to="/Trabajadores"
       >{{ $t("header.search.caption4") }}</router-link
     >
     <router-link
      class="pacientes"
      v-if="$store.state.role === 'userTrabajador'"
      to="/Pacientes"
      >{{ $t("header.search.caption9") }}</router-link
    >
  
    <router-link class="especialidades" to="/">{{ $t("header.search.caption10") }}</router-link>
    <router-link class="area" to="/Login"
      ><img class="user" src="../../assets/user.png" /> {{ $t("header.search.button2") }}
      </router-link
    >
   </div>
    </footer>
</template>

<script>

export default {

}
</script>

<style>

</style>