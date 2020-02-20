<template>
  <div id="about">
    <div class="top">
     <div class="left">
      <router-link to="/admin">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
      <span>权限认证</span>
    </div>
    <router-view/>
  </div>
  <div class="but">
     <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      ...
    </van-index-bar>
  </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';
export default{
  name:"about",
  data(){
    return{
     aa:""
    }
  },
  // components:{
         
  //  },
  //  mounted(){
    
  //  },
  //  methods:{
     
  //  }
}
</script>
<style lang="scss">
#about{
  background: #FFFDF9;
  width: 100%;
  height: 100%;
  position: fixed;
  .top{
    margin-top: 0.5em;
    width: 100%;
    .left{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    float: left;
    margin-left: 0.5em;
    span{
        margin-left: 30%;
    }
    }
  }
  .but{
      margin-top: 3em;
      border-top: 3px solid #eee;
      width: 100%;
      height: 100%;
  }
}
</style>
