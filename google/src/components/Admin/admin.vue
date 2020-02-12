<template>
  <div id="admin">
        <Common :touxiang="touxiang"></Common>
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
  
}
</style>
