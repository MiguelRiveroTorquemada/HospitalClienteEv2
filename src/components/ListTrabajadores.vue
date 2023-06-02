<template>
  <!--header-->
  <div>
    <!--i18n-->

    <v-card class="mx-auto" max-="1500">
      <v-toolbar-title>
        <h1 style="text-align: center">
          {{ $t("header.search.caption4") }}
        </h1></v-toolbar-title
      >

      <v-container>
        <router-link v-if="$store.state.role === 'admin'" to="/Trabajadores/add">
          <v-btn variant="success" color="#4DD0E1">{{
            $t("header.search.button6")
          }}</v-btn>
        </router-link>
      </v-container>

      <!--Buscar por Usuarios-->
      <v-container>
        <v-text-field
          class="text-green"
          type="text"
          v-model="nombre"
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
        <v-col v-for="n in 1" :key="n" cols="12" sm="4"> </v-col>

        <v-row dense class="cards">
          <v-col v-for="item in Trabajadores" :key="item.id" cols="12">
            <v-card color="white" style="width: 700px" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div class="textos">
                  <v-card-title><td style="color: #00838F;">NOMBRE: </td>{{ item.nombre }}</v-card-title>
                  <v-card-subtitle><td style="color: #00838F;">EMAIL: </td>{{ item.email }}</v-card-subtitle>
                  <v-card-subtitle><td style="color: #00838F;">BAJA: </td>{{ item.baja }}</v-card-subtitle>
                  <v-card-subtitle><td style="color: #00838F;">FECHA DE INICIO: </td>{{ item.inicioTrabajo }}</v-card-subtitle>
                  <v-card-subtitle><td style="color: #00838F;"> SALARIO: </td>{{ item.salario }}</v-card-subtitle>
                  <v-card-subtitle><td style="color: #00838F;"> EDAD: </td>{{ item.edad }}</v-card-subtitle>
                </div>

                <v-avatar class="userimg" size="100" rounded="0">
                  <v-img src="../assets/usuarios.png"></v-img>
                </v-avatar>
                <!--Boton con Role de administrador para borrar-->
                <div class="botones">
                  <v-btn
                    v-if="$store.state.role === 'admin'"
                    @click="onDeleteTrabajador(item.id)"
                    color="#8C9EFF"
                    variant="primary"
                    ><img style="width: 30px;" src="../assets/eliminar.png" > {{ item.id }}</v-btn>
                  <v-btn 
                    :item="Trabajadores"
                    v-on:click="showUserDetails(item.id)"
                    color="#90CAF9"
                    variant="primary"
                    >{{ $t("header.search.button5") }},{{ item.id }}</v-btn>
                  </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-img
        alt="Vue logo"
        src="../assets/hospital.jpg"
        height="500px"
        cover
      ></v-img>
      <v-card> </v-card>
    </v-card>
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
import Vistas from "@/components/Especificas/Vistas.vue";

export default {
  data() {
    return {
      nombre:""
    };
  },
  

  components: {
    Vistas, //Login
  },

  name: "ListTrabajadores",
  computed: {
    ...mapState(["Trabajadores" ]),
  },


  methods: {
    showUserDetails(item) {
      //enrrutamiento clickando al que pinches
      this.$router.push(`Trabajadores/${item}`);
    },

    ...mapActions({
      deleteTrabajador: "deleteTrabajador",
      searchTrabajadores: "searchTrabajadores",
      setTrabajadoresId: "setTrabajadoresId",
      fetchTrabajadores: "fetchTrabajadores",
    }),

    onDeleteTrabajador(id) {
      this.deleteTrabajador(id);
    },

    launchQuery() {
      if (this.nombre) {
        this.searchTrabajadores(this.nombre);
        return;
      }
      this.fetchTrabajadores();
    },
  
  },
};
</script>
  
  <style>
#bUsers {
  display: inline-block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
}

#bHome {
  display: inline-block;
  padding: 0.5rem 1rem;
  width: 200px;
  margin: 0 auto;
}
#gene {
  display: block;
  width: 200px;
  margin: 0 auto;
}
.text-green input {
  background-color: rgb(217, 217, 217);
}

.cards {
  display: grid;
  grid-template-columns: 600px 600px;
}

.botones{
  margin-right: 20%;
  margin-left: -25%;
}

.userimg{
  margin-left: 150px;
  margin-top: 150px;
}

</style>