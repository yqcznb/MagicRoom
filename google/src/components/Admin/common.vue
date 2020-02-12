<template>
  <div id="common">
    <div class="top">
     <div class="left">
         <!-- 管理员传1 学生2 老师3 -->
      <svg class="icon" aria-hidden="true" v-show="aa==1" @click="jump(1)">
        <use xlink:href="#iconguanliyuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-show="aa==2" @click="jump(2)">
        <use xlink:href="#iconxuesheng"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-show="aa==3" @click="jump(3)">
        <use xlink:href="#iconlaoshi"></use>
      </svg>
     </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxiaoxi"></use>
      </svg>
     </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name:"common",
  data(){
    return{
        aa:""
    }
  },
  props: ['touxiang'],
  components:{
         
   },
   mounted(){
    this.getData();
   },
   methods:{
      getData (e) {
       console.log(this.touxiang);  
       this.aa = this.touxiang 
   },
   jump(num){
       if(num==1){
           this.$router.push({
          name: 'my',
          params: {
            num:1,
            one:"工号",
            two:"职位",
            three:"老师"
          }
        })
       }if(num==2){
          this.$router.push({
          name: 'my',
          params: {
            num:2,
            one:"专业",
            two:"学号",
            three:"同学"
          }
        })
       }if(num==3){
          this.$router.push({
          name: 'my',
          params: {
            num:3,
            one:"工号",
            two:"职位",
            three:"老师"
          }
        })
       }
   }
   }
}
</script>
<style lang="scss">
#common{
  text-align: center;
  background: #FFFDF9;
  width: 100%;
  position: fixed;
  .top{
    margin-top: 0.5em;
    .left{
    float: left;
    margin-left: 0.5em;
    }
    .right{
      float: right;
      margin-right: 0.5em;
    }
   
  }
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3em;
}
</style>
