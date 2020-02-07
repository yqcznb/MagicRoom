<template>
  <div id="my">
    <div class="top">
     <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconsaoyisao"></use>
      </svg>
     </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhuabanfuben-copy"></use>
      </svg>
     </div>
    </div>
    <router-link  to="/data">
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
    </router-link>
    <div class="button">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconshouji-copy"></use>
          </svg>1555****000
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyouxiangbangding"></use>
          </svg>Mag****@gmail.com
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icongengduo"></use>
          </svg>关于
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconshezhi2"></use>
          </svg>设置
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
#my{
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
      box-shadow:0px -1px  2px 3px #eee;
      border-top: 1px solid #eee;

    }
    
  }
}
</style>
