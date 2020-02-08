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
       <div>修改手机号</div>
      <div class="right">下一步</div>
    </div>
     <div class="info">
        <div>
          旧手机号：<input type="text" name="phonenum" v-model="phonenum" disabled="disabled">
        </div>
        <div class="yz">
          <span>验证码：</span><input type="text" name="code" v-model="code"><van-button type="default" size="small">点击获取</van-button>
        </div>
        
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name:"change",
  data(){
    return{
     phonenum:"1555****000",
     code:""
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
   .info{
      margin-top: 1.5em;
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
        input{
         width: 8em;
       }
     }
    }
}
</style>
