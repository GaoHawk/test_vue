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
      let x = 0;
      let y = 0;
      let moveX,moveY;
      el.addEventListener('touchstart',function(e){
          console.log('click' + el);
          console.log(e);
          x = e.changedTouches[0].pageX;
          y = e.changedTouches[0].pageY;
          
      })
      el.addEventListener('touchend',function(e){
          console.log('touchEnd'+ el);
          console.log(e);
          moveX = Math.round(e.changedTouches[0].pageX - x);
          moveY = Math.round(e.changedTouches[0].pageY - y);
          if(moveX ==0 && moveY ==0){
            console.log('this event is click');
          }
      })

  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
