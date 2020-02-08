<template>
  <div id="data">
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
    <div class="touxiang">
       <div >
          <van-image
          @click="change"
          round
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
         <van-action-sheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
          cancel-text="取消"
          @cancel="onCancel"
          close-on-click-action
        />
       </div>
        <div class="info">
        <div>
          姓名：<input type="text" name="name" id="name" v-model="name">
        </div>
        <div>
          职位：<input type="text" name="position" id="position" v-model="position">
        </div>
        <div>
          工号：<input type="text" name="worknum" id="worknum" v-model="worknum">
        </div> 
        </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name:"my",
  data(){
    return{
      worknum:2700001111111,
      position:'教务处主任',
      name:"古飞扬",
      show: false,
      actions: [
        { name: '拍照' },
        { name: '从手机相册选择' },
      ]
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
#data{
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
  .touxiang{
    margin-top: 3em;
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
     }
    }
  }
  
}
</style>
