<template>
    <div>
      <div style="background-color: #90CAF9;">
       <h1 style="text-align:center">
        {{ $t("header.search.caption5") }}
      </h1> 
      </div>
  

    <v-sheet width="400" class="mx-auto">
    
      <h1 style="color: #4DD0E1;">Detalles del usuario {{ $route.params.id }}</h1>
      <v-img
                    src="../assets/user.png"
                    height="200px"
                    width="200px"
                    cover
                  ></v-img>
        
          <v-list-item ><td style="color: #00B0FF;" >Nombre=</td> <td>{{ selectedTrabajadores.nombre }}</td></v-list-item>
          <v-list-item><td style="color: #00B0FF;">Email= </td> <td>{{ selectedTrabajadores.email }}</td></v-list-item>
          <v-list-item><td  style="color: #00B0FF;">Esta baja?= </td> <td>{{ selectedTrabajadores.baja }}</td></v-list-item>
          <v-list-item><td style="color: #00B0FF;">Inicio de trabajo= </td> <td>{{ selectedTrabajadores.inicioTrabajo }}</td></v-list-item>
          <v-list-item><td style="color: #00B0FF;">Salario </td> <td>{{ selectedTrabajadores.salario }}</td></v-list-item>
          <v-list-item><td style="color: #00B0FF;"> Edad= </td> <td>{{ selectedTrabajadores.edad }}</td></v-list-item>
    </v-sheet>
    </div>
  </template>
  
  <script>
  
  import { mapState } from "vuex";
  export default {

    computed: {
      ...mapState(["Trabajadores"]),
      selectedTrabajadores() {
        return this.Trabajadores.filter((Trabajadores) => Trabajadores.id === this.id)[0];
      },
    },
    created() {
      this.id = parseInt(this.$route.params.id, 10);
    },
    data() {
      return {
        id: 0,
      };
    },
  };
  </script>
  
  <style>
  #bUsers{
     
  display: block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
  }
  </style>
  