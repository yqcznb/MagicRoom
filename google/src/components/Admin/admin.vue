<template>
  <div id="admin">
       <div> <Common :touxiang="touxiang"></Common></div>
    <div class="class_ad">

    </div>
    <div class="rizhi">
      操作日志
    </div>
    <router-view/>
  </div>
</template>
<script>
import Common from '../Admin/common'
export default{
  name:"admin",
  data(){
    return{
      touxiang:"1"
    }
  },
  components:{
    Common
   },
   mounted(){
    
   },
   methods:{
      change(num){
        if(num==1){
          this.$router.push({
          path: `/change`,
        })
        }
         if(num==2){
          this.$router.push({
          path: `/email`,
        })
        } if(num==3){
          this.$router.push({
          path: `/about`,
        })
        } if(num==4){
          this.$router.push({
          path: `/set`,
        })
        }
      }
   }
}
</script>
<style lang="scss">
#admin{
  text-align: center;
  background: #F9F7F7;
  width: 100%;
  height: 100%;
  position: fixed;
  .class_ad{
    margin-top: 4em;
    width: 70%;
    height:19em;
    background: #FFFDF9;
    margin:4em auto 0 auto;
    border: 1px solid #eee;
    box-shadow:0 0 1em #ccc; 
  }
  .rizhi{
    width: 80%;
    height:15em;
    background: #FFFDF9;
    margin:2.5em auto 0 auto;
    border: 1px solid #eee;
    box-shadow:0 0 1em #ccc; 
    border-radius: 1em;
  }
}
</style>
