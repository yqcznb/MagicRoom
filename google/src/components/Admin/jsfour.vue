<template>
  <div id="about">
    <div class="top">
     <div class="left">
      <router-link to="/my">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
      <span>关于我们</span>
    </div>
    <router-view/>
  </div>
  <div class="but">
      <p>关于我们后续揭晓</p>
  </div>
  </div>
</template>
<script>
export default{
  name:"about",
  data(){
    return{
     aa:""
    }
  },
  // components:{
         
  //  },
  //  mounted(){
    
  //  },
  //  methods:{
     
  //  }
}
</script>
<style lang="scss">
#about{
  background: #FFFDF9;
  width: 100%;
  height: 100%;
  position: fixed;
  .top{
    margin-top: 0.5em;
    width: 100%;
    .left{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    float: left;
    margin-left: 0.5em;
    span{
        margin-left: 30%;
    }
    }
  }
  .but{
      margin-top: 3em;
      border-top: 3px solid #eee;
  }
}
</style>
