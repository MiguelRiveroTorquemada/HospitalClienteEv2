<template>
  <div>
    <v-btn @click="$i18n.locale = 'es'" style="background-color: #ef9a9a"
      >🇪🇸</v-btn
    >
    <v-btn @click="$i18n.locale = 'en'" style="background-color: #90CAF9"
      >🇨🇦󠁧󠁢󠁥󠁮</v-btn
    >
    
    
    <div class="navbar">
     
      
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
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  width: 100%;
  background-color: #ffffff;
  overflow: auto;
}

/* Navigation links */
.navbar a {
  float: left;
  padding: 12px;
  text-decoration: none;
  font-size: 17px;
  width: 25%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
}

/* Add a background color on mouse-over */
.navbar a:hover {
  color: #90CAF9;
}

.user {
  width: 20px;
}

.imgheader{
  display: flex;
height: 700spx;
width: 2500px;
}

/* Add responsiveness - on screens less than 500px, make the navigation links appear on top of each other, instead of next to each other */
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
    width: 100%;
    text-align: left; /* If you want the text to be left-aligned on small screens */
  }
}
</style>