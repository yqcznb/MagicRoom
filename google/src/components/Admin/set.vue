<template>
  <div id="change">
    <div v-show="show"> 
      <div class="top">
     <div class="left">
      <router-link to="/my">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
    </div>
       <div class="mm">设置</div>
    </div>  
    <van-cell title="修改密码" size="large" is-link />
    <van-cell title="注销账号"  size="large" />
    <van-cell title="退出登入"  size="large" />
    </div> 
    <router-view/>
   <div v-show="!show"> 
      <div class="top">
     <div class="left">
      <router-link to="/my">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
    </div>
       <div class="mm">设置</div>
    </div>  
     <div class="info">
         <div class="yz">
          <span>旧密码：</span><input type="password" name="orderpass" v-model="code">
     </div>
     <div class="yz">
          <span>新密码：</span><input type="password" name="newpass" v-model="code">
     </div>
     <div class="yz">
          <span>确认密码：</span><input type="password" name="newpass2" v-model="code">
     </div>
     <van-button type="default" @click="ok">确认</van-button>
     </div>
    </div> 
  </div>
  
</template>
<script>
export default{
  name:"change",
  data(){
    return{
     orderpass:"",
     newpass2:"",
     newpass:"",
     show: false,
    }
  },
  components:{
         
   },
   mounted(){
    
   },
   methods:{
     ok(){
         this.$toast("修改成功");
        setTimeout(() =>{
            this.$router.push("/my");
        },2100);
        
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
  font-weight: bold;
  .top{
    background: #FFFDF9;
    padding-top: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    .left{
    float: left;
    margin-left: 0.5em;
    }
    .mm{
      float: left;
      margin-left:35%;
    }
  }
  .van-cell{
      margin: 1em 0;
      background: #FFFDF9;
      border-top: 1px solid #eee;
  }
  .info{
      margin-top: 1em;
      div{
       text-align: left;
       font-weight: bold;
       border-top: 1px solid #eee;
       padding:1em 2em;
       input{
         border: 0;
         background: #FFFDF9;
       }
     }
     div:last-child{
        border-bottom: 1px solid #eee;
        padding:0.75em 2em;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
     }
    }
}
</style>
