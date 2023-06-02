<template>
  <!--header-->
  <div>
    <!--i18n-->
    <div><v-img class="imgheader" src="../assets/hospital.jpg"></v-img></div>

    <v-card class="mx-auto" max-="1500">
      <v-toolbar-title>      <h1 style="text-align: center">
        {{ $t("header.search.caption10") }}
      </h1></v-toolbar-title>
      <div class="tittle" style="color: #006064;">Una atención médica integral</div>
     
      <v-container>
        <p class="parrafo" style="color: #004D40;">En Cepsa nuestro compromiso es ofrecerte siempre los mejores servicios y productos. <br>
        Nuestra clínica cuenta con un equipo de 30 profesionales de la salud (médicos, especialistas, enfermeras y personal administrativo), lo que nos permite ofrecer a nuestros pacientes un amplio catálogo de especialidades médicas.

Un cuadro médico, avalado por una contrastada y extensa experiencia, que se preocupa por tu salud, bienestar y tranquilidad, y que garantiza una asistencia integral y cercana.

CENTROSALUD mantiene, además, acuerdos de asistencia médica con la mayoría y más importantes mutuas y compañías aseguradoras de salud de España.</p>
        <router-link   v-if="$store.state.role==='admin'"  to="/addEspecialidades">
        <v-btn variant="success" color="#4DD0E1">{{ $t("header.search.button6") }}</v-btn>
        
      </router-link>  
    </v-container>

        <!--Buscar por especialidad-->
        <v-container  >      
            <v-text-field
        
          class="text-green"
          type="text"
          v-model="nombreEspecialidad"
          clearable
          hide-details="auto"
          label="Filled"
          placeholder="Search"
          filled
          rounded
          dense
          single-line
          append-icon="mdi-magnify"
         
        />
        <v-btn @click="launchQuery">{{ $t("header.search.button9") }}</v-btn>

        <!---->


        <v-row dense class="cards">
          
          <v-col v-for="item in Especialidades" :key="item.id" cols="12">
            
            <v-card id="grid"  color="#E3F2FD"  style="width: 400px"   theme="dark">
              <v-avatar class="ma-3" size="325" rounded="0">
                  <v-img
                    src="../assets/hospital.jpg"
                  ></v-img>
                </v-avatar>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div id="grid">
                  <v-card-title class="text-h5">
                    {{ item.nombreEspecialidad }}
                  </v-card-title >

                  <v-card-subtitle >{{ item.descripcion }}</v-card-subtitle>
                  <v-card-subtitle><td style="color:#004D40 ;">Son rotativos los turnos? : </td>{{ item.rotativa }}</v-card-subtitle>
                  <v-card-subtitle><td style="color:#004D40 ;"> Fecha de incio  :</td>{{ item.inicioEspecialidad }}</v-card-subtitle>
                  <v-card-subtitle><td style="color:#004D40 ;">Salario  :</td>{{ item.salario }}</v-card-subtitle>
                  <v-card-subtitle><td style="color:#004D40 ;"> Nº de afiliados  :</td>{{ item.afiliados }}</v-card-subtitle>
                </div>

                
                <!--Boton con Role de administrador para borrar-->
                <v-btn  v-if="$store.state.role==='admin'" @click="onDeleteEspecialidades(item.id)"
                  
                  variant="primary"
                  > <img style="width: 30px;" src="../assets/eliminar.png" > {{ item.id }}</v-btn>
              </div>

            </v-card>
            
          </v-col>
        </v-row>
      </v-container>
      <v-img  alt="Vue logo" src="../assets/hospital.jpg"
      
      height="500px"
      cover
    ></v-img>
   



    <v-card

>
 

  
  <div>





  <v-sheet width="300" class="mx-auto">

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
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Login from './Login.vue';

export default {
  components: { Login },
  data() {
    return {
      username:'',
    password:'',
    nombreEspecialidad:'',

    drawer: false,
      group: null,

      show: false,
      alignments: [
        'start',
        'center',
        'end',
      ],
      
    };
    
  },
  watch: {
      group () {
        this.drawer = false
      },
    },

  name: "ListEspecialidades",
  computed: {
    ...mapState(["Especialidades"]),
  },
  methods: {
    ...mapActions({ deleteEspecialidades: "deleteEspecialidades",searchEspecialidades: "searchEspecialidades",fetchEspecialidades:"fetchEspecialidades" }),

    launchQuery() {
      if(this.nombreEspecialidad){
        this.searchEspecialidades(this.nombreEspecialidad);
        return
      }
      this.fetchEspecialidades();
    }, 
    onDeleteEspecialidades(id) {
      this.deleteEspecialidades(id);
    },
      
    },
    doLogin(){
  this.$store.dispatch('login',{username : this.username,password: this.password})
  .then(ret =>{
    if(!ret){
    alert(this.$t(errors.invalidLogin))
  }
  })

}

  }

</script>

<style>
.text-green input {
  background-color: rgb(217, 217, 217);
  width: 20px;
}
.grid{
 
  display: grid;
  grid-template-columns: 50px 400px;
  grid-template-rows: 200px 75px;


}
.tittle{
font-size: 90px;
color:#212121
;
display: flex;
justify-content: center;
}
.parrafo{
  font-size: 20px;
color:#212121;
display: flex;
justify-content: center;
}

.cards{
  display: grid;
  grid-template-columns: 600px 600px;
}

</style>