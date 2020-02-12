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
  background: #FFFDF9;
  width: 100%;
  height: 100%;
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
  .touxiang{
    color:black;
    margin-top: 3em;
    .info{
      margin-top: 1.5em;
      div{
       text-align: left;
       padding: 0.3em 2em;
       font-weight: bold;
     }
    }
  }
  .button{
    div{
      border-top: 1px solid #eee;
      padding:0.5em 0;
      display: flex;
      flex-direction: row;
      font-weight: bold;
      align-items: center;
      svg{
        margin: 0 2em;
      }
    }
    div:last-child{
      border-bottom: 1px solid #eee;
    }
    div:first-child{
      margin-top: 1.5em;
      box-shadow:0px -2px  2px 2px #eee;
      border-top: 1px solid #eee;

    }
    
  }
}
</style>
