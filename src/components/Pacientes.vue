<template>
  <!--header-->
  <div>
    <!--i18n-->

    <v-card class="mx-auto" max-="1500">
      <div><v-img style="width: 2000px; height: 300px;" class="imgheader" src="../assets/pacientes.jpg"> <v-toolbar-title>
            <h1 style="text-align: center">
              {{ $t("header.search.caption9") }}
            </h1>
          </v-toolbar-title></v-img></div>

      <v-container>


      </v-container>



      <v-container>
        <!--<v-btn @click="launchQuery">{{ $t("header.search.button9") }}</v-btn>-->

        <router-link v-if="$store.state.role === 'userTrabajador'" to="/AddPacientes">
          <v-btn variant="success" color="#4DD0E1">{{
            $t("header.search.button6")
          }}</v-btn>
          
        </router-link>
        <router-link v-if="$store.state.role === 'admin'" to="/AddPacientes">
          <v-btn variant="success" color="#4DD0E1">{{
            $t("header.search.button6")
          }}</v-btn>
          
        </router-link>

        <v-text-field class="text-green" type="text" v-model="fecha_ingreso" clearable hide-details="auto" label="Filled"
          placeholder="Search" filled rounded dense single-line append-icon="mdi-magnify" />
        <v-btn @click="launchQuery">{{ $t("header.search.button13") }}</v-btn>

        <!---->


        <v-row dense class="cards">
          <v-col v-for="item in Pacientes" :key="item.id" cols="12">
            <v-card class="pacientes" color="#E3F2FD" theme="dark" width="500px">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    <td style="color: #00838F;">Nombre : </td>
                    <td>{{ item.nombre }}</td>
                  </v-card-title>

                  <v-card-subtitle>
                    <td style="color: #00838F;">Apellido : </td>{{ item.apellido }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <td style="color: #00838F;">Esta de baja? : </td>{{ item.alta_baja }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <td style="color: #00838F;">Fecha de ingeso : </td>{{ item.fecha_ingreso }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <td style="color: #00838F;">Peso : </td>{{ item.peso }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <td style="color: #00838F;">Edad : </td>{{ item.edad }}
                  </v-card-subtitle>

                </div>

                <v-avatar class="ma-3" size="250" rounded="0">
                  <v-img src="../assets/user.png"></v-img>
                </v-avatar>
                <!--Boton con Role de administrador para borrar-->
              </div>
              <v-btn v-if="$store.state.role === 'admin'" @click="onDeletePacientes(item.id)" variant="primary"
                class="boton"><img style="width: 30px;" src="../assets/eliminar.png"> {{ item.id }}</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      show: false,
      nombre: '',
      fecha_ingreso: ''
    };
  },

  name: "Pacientes",
  computed: {
    ...mapState(["Pacientes"]),
  },
  methods: {
    ...mapActions({ deletePacientes: "deletePacientes", searchPacientes: "searchPacientes", fetchPacientes: "fetchPacientes" }),


    onDeletePacientes(id) {
      this.deletePacientes(id);
    },

    launchQuery() {
      if (this.fecha_ingreso) {
        this.searchPacientes(this.fecha_ingreso);
        return
      }

      this.fetchPacientes();
    },


  },

}
</script>

<style>
.text-green input {
  background-color: rgb(217, 217, 217);
  width: 20px;
}

.boton {
  margin-left: 75%;
}

.cards {
  display: grid;
  grid-template-columns: 600px 600px;
}
</style>