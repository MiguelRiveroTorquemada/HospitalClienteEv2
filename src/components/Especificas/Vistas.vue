<template>
  <div>
        <router-view />

      <v-container>
      <router-link  v-if="$store.state.role==='admin'"   to="/Trabajadores">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.caption4") }}</v-btn>
        
      </router-link>
    </v-container>
  <v-container>
      <router-link   to="/login">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.button2") }}</v-btn>
        
      </router-link>
    </v-container>
    <v-container>
      <router-link   v-if="$store.state.role==='userTrabajador'"  to="/">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>
      <router-link   v-if="$store.state.role=== 'admin'"  to="/">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>
    </v-container>
  <v-container>
      <router-link  v-if="$store.state.role==='admin'"  to="/Trabajadores">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.button") }}</v-btn>
        
      </router-link>

    </v-container>

    <v-container>
      <router-link  v-if="$store.state.role==='userTrabajador'"  to="/Pacientes">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.button") }}</v-btn>
        
      </router-link>

    </v-container>
    

     
  <v-container>
      <router-link   v-if="$store.state.role==='userTrabajador'"  to="/Trabajadores">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.caption4") }}</v-btn>
        
      </router-link>
     
    </v-container>
    
  <v-container>
      <router-link   v-if="$store.state.role==='userMiguel'"  to="/">
        <v-btn variant="success" color="#80DEEA">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>

    </v-container>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>