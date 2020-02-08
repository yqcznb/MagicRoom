<template>
  <div id="change">
    <div class="top">
     <div class="left">
      <router-link to="/my">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
    </div>
       <div>个人资料</div>
    <router-link to="/my">
      <div class="right">提交</div>
    </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name:"change",
  data(){
    return{
     
    }
  },
  components:{
         
   },
   mounted(){
    
   },
   methods:{
      change() {
        this.show = true;
        console.log(this.show)
      },
      onCancel() {
        this.show = false;
        this.$toast("取消成功");
        console.log(this.show)
      },
      onSelect(item) {
      this.show = false;
      this.$toast(item.name);
    }
   }
}
</script>
<style lang="scss">
#change{
  background: #FFFDF9;
  width: 100%;
  height: 100%;
  position: fixed;
  .top{
    margin-top: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
    .left{
    float: left;
    margin-left: 0.5em;
    }
    .right{
      float: right;
      margin-right: 0.5em;
      color:black;
    }
  }
  
}
</style>
