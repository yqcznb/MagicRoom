<template>
    <div id="main">
      <Common :touxiang="touxiang"></Common>
      <Scroll></Scroll>
    </div>
</template>

<script>
import Common from '../Admin/common';
import Scroll from '../Teacher/scroll';
export default {
  data () {
    return {
      touxiang: '3',
    }
  },
  mounted () {
    
  },
  methods: {
    
  },
  components:{
    Common,
    Scroll
  },
}
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #main{
        text-align: center;
        background: #FFFDF9;
        width: 100%;
        height: 100%;
        position: fixed;
    }
</style>