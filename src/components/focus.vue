<template>

</template>

<script>
export default {
  name: 'my-focus',
  data () {
    return {
        
    }
  },
  inserted: function(el,binding,vnode){
      el.focus();
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
