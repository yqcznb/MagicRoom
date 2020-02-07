<template>
  <div id="data">
    <div class="top">
     <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhuabanfuben"></use>
      </svg>
     </div>
     <div>
         个人资料
     </div>
    <div class="right">
     提交
    </div>
    </div>
    <div class="touxiang">
       <div>
          <van-image
          round
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
       </div>
        <div class="info">
          <div>工号：{{worknum}}</div>
          <div>职位：{{position}}</div>
          <div>{{name}}老师</div>
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
      name:"古飞扬"
    }
  },
  components:{
         
   },
   mounted(){
    
   },
   methods:{
      
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
    }
  }
  .touxiang{
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
  
}
</style>
