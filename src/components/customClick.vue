<template>

</template>

<script>
export default {
  name: 'my-click',
  data () {
    return {
        
    }
  },
  bind: function(el,binding,vnode){
      el.addEventListener('click'function(){
          console.log('click' + el);
      })
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
