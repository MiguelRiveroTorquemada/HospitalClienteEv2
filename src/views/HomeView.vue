<template>
<div>
  
  <ListEspecialidades/>
    
    <!-- <login></login> -->
</div>
</template>

<script>

import ListEspecialidades from "@/components/ListEspecialidades.vue";
// import Login from '@/Login';

//import Login from '@/components/Login.vue'
export default {
  name: "Home",
  

  components: {
    ListEspecialidades,//Login
    
    // Login
  },
};
</script>
