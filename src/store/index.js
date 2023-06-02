
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Trabajadores: [],
    Especialidades: [],
    Pacientes: [],

    //Login
    isAuthenticated: false,
    role: ''


  },
  getters: {

  },
  mutations: {

    //Login
    setAuthenticated(state) {
      state.isAuthenticated = true
    },
    setRole(state, role) {
      state.role = role
    },



    //Usuarios
    setTrabajadores(state, payload) {
      state.Trabajadores = payload
    },
    setTrabajadoresId(state, setIDU) {
      state.Trabajadores = state.Trabajadores.filter(({ id }) => id === setIDU);
    },
    addTrabajadores(state, payload) {
      state.Trabajadores.push(payload)
    },
    deleteTrabajador(state, idToRemove) {
      state.Trabajadores = state.Trabajadores.filter(({ id }) => id !== idToRemove);
    },


    //Especialidades
    setEspecialidades(state, payload) {
      state.Especialidades = payload
    },
    addEspecialidades(state, payload) {
      state.Especialidades.push(payload)
    },
    deleteEspecialidades(state, idToRemove) {
      state.Especialidades = state.Especialidades.filter(({ id }) => id !== idToRemove);
    },

    //Pacientes
    setPacientes(state, payload) {
      state.Pacientes = payload
    },
    deletePacientes(state, idToRemove) {
      state.Pacientes = state.Pacientes.filter(({ id }) => id !== idToRemove);
    },
    addPacientes(state, payload) {
      state.Pacientes.push(payload)
    },
  },
  actions: {
    //LOGIN
    login({ commit }, payload) {
      console.log(`payload ${JSON.stringify(payload)}`);
      //fetch
      if (payload.username === 'admin' && payload.password === 'admin') {
        commit('setAuthenticated')
        commit('setRole', 'admin')
        return true

      }
      if (payload.username === 'miguel' && payload.password === 'Miguel') {
        commit('setAuthenticated')
        commit('setRole', 'userMiguel')
        return true

      }
      if (payload.username === 'trabajador' && payload.password === 'trabajador') {
        commit('setAuthenticated')
        commit('setRole', 'userTrabajador')
        return true

      }
      return false



    },



    //USUARIOS
    //ver el listado de usuarios
    fetchTrabajadores({ commit }) {
      fetch('https://localhost:7122/Trabajadores')
        .then(result => result.json())
        .then(data => commit('setTrabajadores', data))
    },
    setTrabajadoresId({ commit }, id) {
      fetch('https://localhost:7122/Trabajadores' + `/${this.id}`)
        .then(result => result.json())
        .then(data => commit('setTrabajadoresId', data))

      //recargar pagina
      commit('setTrabajadoresId', id)
    },

    //hacer el post
    addTrabajadores({ commit }, trabajadorInfo) {
      fetch('https://localhost:7122/Trabajadores', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(trabajadorInfo)
      })
        .then(result => result.json())
        .then(data => commit('addTrabajadores', data))
    },

    //Buscar por nombre
    searchTrabajadores({ commit },nombre) {
      fetch('https://localhost:7122/Trabajadores/nombre?nombre=' + `${nombre}`)


        .then(result => result.json())

        .then(data => commit('setTrabajadores', data))
      commit('setTrabajadores', nombre)
    },



    deleteTrabajador({ commit }, id) {
      fetch('https://localhost:7122/Trabajadores' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deleteTrabajador', data))
      //lo que hace es refrescar pantalla
      commit('deleteTrabajador', id)

    },






    //ESPECIALIDADES
    fetchEspecialidades({ commit }) {
      fetch('https://localhost:7122/Especialidades')
        .then(result => result.json())
        .then(data => commit('setEspecialidades', data))
    },
    //Buscar por nombre
    searchEspecialidades({ commit }, nombreEspecialidad) {
      fetch('https://localhost:7122/Especialidades/nombreEspecialidad?nombreEspecialidad=' + `${nombreEspecialidad}`)


        .then(result => result.json())

        .then(data => commit('setEspecialidades', data))
    },
    //hacer el post
    addEspecialidades({ commit },especialidadInfo) { 
      fetch('https://localhost:7122/Especialidades', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(especialidadInfo)
      })
        .then(result => result.json())
        .then(data => commit('addEspecialidades', data))
    },

    deleteEspecialidades({ commit }, id) {
      fetch('https://localhost:7122/Especialidades' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deleteEspecialidades', data))
      //Resetear pagina sin perderla
      commit('deleteEspecialidades', id)
    },



    //Pacientes

    fetchPacientes({ commit }) {
      fetch('https://localhost:7122/Pacientes')
        .then(result => result.json())
        .then(data => commit('setPacientes', data))
    },
    searchPacientes({ commit },fecha_ingreso) {
      fetch('https://localhost:7122/Pacientes/fechaIngreso?fecha_ingreso=' + `${fecha_ingreso}`)


        .then(result => result.json())

        .then(data => commit('setPacientes', data))
      commit('setPacientes')
    },

    deletePacientes({ commit }, id) {
      fetch('https://localhost:7122/Pacientes' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deletePacientes', data))
      commit('deletePacientes', id)
    },
    //hacer el post
    addPacientes({ commit }, pacientesInfo) {
      fetch('https://localhost:7122/Pacientes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(pacientesInfo)
      })
        .then(result => result.json())
        .then(data => commit('addPacientes', data))
    },

  },
  modules: {
  }
})

