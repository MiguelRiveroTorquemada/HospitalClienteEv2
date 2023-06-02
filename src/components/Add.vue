
<template>
   <div >
      
    <div style="background-color: #90CAF9;">
      <h1 style="text-align:center">
        {{ $t("header.search.caption7") }}
        </h1>
      </div>
 


    <v-sheet width="340" class="mx-auto">
        <v-layout
            align-end
            fill-height
            pa-10
          >
            <div class="title font-weight-light" style="color: brown;">{{ $t("header.search.button6") }}</div>
          </v-layout>
          <router-link v-if="$store.state.role==='admin'" to="/Trabajadores">
            <v-btn variant="success" color="#4DD0E1">{{ $t("header.search.button4") }}</v-btn>
          </router-link>
      <v-form @submit="onSubmit" @reset="onReset"  >
     


        <v-text-field
          id="input-1"
          v-model="form.nombre"
          :counter="20"
          type="text"
          :rules="rulesN"

          placeholder="Enter name" 
          required
        ></v-text-field>
        
        <v-text-field
          id="input-3"
          v-model="form.email"
          type="text"
          placeholder="Enter email"
          :rules="rulesE"
          required
        ></v-text-field>
        <v-text-field
        id="input-1"
         label="fecha de inscripcion ,YYYY-MM-D"
         v-model="form.inicioTrabajo"
         type="text"
         :rules="rulesins"
         placeholder="fecha de inicio " 
         required
        ></v-text-field>

        <v-checkbox
        id="input-3"
          v-model="form.baja"
          label="¿esta de baja?"
          placeholder=" esta de baja? "
          
       ></v-checkbox>
      
       <v-text-field
         id="input-1"
         :rules="edad"
         v-model="form.salario"
         type="text"
         placeholder="Salario" 
         required
       ></v-text-field>
       <v-text-field
         id="input-1"
         :rules="edad"
         v-model="form.edad"
         type="text"
         placeholder="Edad" 
         required
       ></v-text-field>
      <v-btn type="submit"   color="success" variant="primary">Submit</v-btn>
      <v-btn type="reset" color="error" variant="danger">Reset</v-btn>
    </v-form>
      </v-sheet>
    

</div>
  </template>
    
  
  <script>
  import { mapActions } from 'vuex'
  export default {
      data(){
          return{
              form:{ 
                  nombre: '', 
                  email:'',
                  baja: '',
                  inicioTrabajo:undefined,
                  salario:'',
                  edad:'',


                 
              },



              rulesN: [
        value => {
          if (value) return true

          return 'You must enter name.'
        },
      ],
      rulesND: [
        value => {
          if (value) return true

          return 'You must enter name.'
        },
      ],
      rulesE: [
       

        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      
      rulesins: [
        value => {
          if (value) return true

          return 'You must enter incripcion.'
        },
      ],
      edad: [
        value => {
          if (value) return true

          return 'You must enter note.'
        },
      ],
      
                 
              
          }
      },
      methods:{
          onSubmit(){
            
              this.addTrabajadores({
                  nombre: this.form.nombre, 
                  email: this.form.email,
                  baja: this.form.baja,
                  inicioTrabajo: this.form.inicioTrabajo,
                  salario: this.form.salario,
                  edad: this.form.edad,
              })
          },
          onReset(){
  
          },
         ...mapActions(['addTrabajadores'])
      },}

  
  </script>
  
  <style>
  .h1{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
  </style>