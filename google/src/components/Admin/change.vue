<template>
  <div id="change">
    <div v-show="!change1"> 
      <div class="top1">
     <div class="left" @click="back"> 
         上一步
    </div>
       <div>修改手机号</div>
      <div class="right" @click="end">完成</div>
    </div>
     <div class="info">
        <div>
          新手机号：<input type="text" name="phonenum" v-model="phonenum" disabled="disabled">
        </div>
        <div class="yz">
          <span>验证码：</span><input type="text" name="code" v-model="code"><van-button type="default" size="small" v-show="show" @click="getCode">点击获取</van-button><van-button type="default" v-show="!show" size="small">{{count}}s</van-button>
        </div>
        
    </div>
    </div>

    <div v-show="change1"> 
      <div class="top">
     <div class="left">
      <router-link to="/my">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
    </div>
       <div>修改手机号</div>
      <div class="right" @click="back">下一步</div>
    </div>
     <div class="info">
        <div>
          旧手机号：<input type="text" name="phonenum" v-model="phonenum" disabled="disabled">
        </div>
        <div class="yz">
          <span>验证码：</span><input type="text" name="code" v-model="code"><van-button type="default" size="small" v-show="show" @click="getCode">点击获取</van-button><van-button type="default" v-show="!show" size="small">{{count}}s</van-button>
        </div>
        
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
     newphonenum:"178****000",
     code:"",
     show: true,
     change1:true,
     count: '',
     timer: null,
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
    getCode(){
      const TIME_COUNT = 60;
      if (!this.timer) {
      this.count = TIME_COUNT;
      this.show = false;
      this.timer = setInterval(() => {
      if (this.count > 0 && this.count <= TIME_COUNT) {
        this.count--;
        } else {
        this.show = true;
        clearInterval(this.timer);
        this.timer = null;
        }
      }, 1000)
      }
    },
    back(){
      this.change1 = !this.change1;
    },
    end(){
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
  text-align: center;
  background: #FFFDF9;
  width: 100%;
  height: 100%;
  position: fixed;
  .top,.top1{
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
  .top1{
    margin-top: 0.8em;
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
        input{
         width: 8em;
       }
     }
    }
}
</style>
