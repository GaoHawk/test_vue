<template>
  <div class="direct">

  </div>
</template>

<script>
export default {
  name: 'my-directive',
  data () {
    return {
    }
  },
  bind: function(el,binding,vnode){
        el.style.color = '#fff'
        el.style.backgroundColor = binding.arg
        el.innerHTML = 
            '指令名name - '       + binding.name + '<br>' +
            '指令绑定值value - '      + binding.value + '<br>' +
            '指令绑定表达式expression - ' + binding.expression + '<br>' +
            '传入指令的参数argument - '   + binding.arg + '<br>'
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
