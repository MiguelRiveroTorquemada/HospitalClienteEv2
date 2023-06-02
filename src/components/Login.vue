<template>
  <v-card

  >

      <v-toolbar-title>      <h1 style="text-align: center">
        {{ $t("header.search.caption") }}
      </h1></v-toolbar-title>

      <v-spacer></v-spacer>




    
    <div>

      <div style="background-color: #90CAF9;">
        <h1 style="text-align:center">{{ $t("header.search.caption3") }}
        </h1>
      </div>
    <v-sheet width="600" class="mx-auto">

<v-form ref="form">
  <v-text-field

    v-model="username"
    type="text"
    label="username"
    required
  ></v-text-field>

  <v-text-field
    v-model="password"
    type="password"
    label="password"
    required
  ></v-text-field>

           <v-btn @click.prevent="doLogin" >Login </v-btn>
    
   
    </v-form>
    </v-sheet>
  </div>
</v-card>

  </template>

<script>
import Vistas from '@/components/Especificas/Vistas.vue'
export default {
   name:'Login',
data(){
  return{
    username:'',
    password:'',

    drawer: false,
      group: null,
  }
},
watch: {
      group () {
        this.drawer = false
      },
    },
    components: {
        Vistas,//Login
    
  },
methods:{
doLogin(){
  this.$store.dispatch('login',{username : this.username,password: this.password})
  .then(ret =>{
    if(!ret){
    alert(this.$t(errors.invalidLogin))
  }
  })

}
}
}
</script>

<style>
#bhome{
 
  display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;

}
</style>