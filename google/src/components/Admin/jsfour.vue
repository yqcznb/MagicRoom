<template>
  <div id="about">
    <div class="top">
     <div class="left">
      <router-link to="/admin">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
      <span>文件上传</span>
    </div>
    <router-view/>
  </div>
  <div class="but">
     <van-uploader 
    :max-count="1" 
    v-model="fileList" 
    :after-read="afterRead"/>
  </div>
  </div>
</template>
<script>
export default{
  name:"about",
  data(){
    return{
     aa:"",
    fileList: []
    }
  },
  // components:{
         
  //  },
  //  mounted(){
    
  //  },
   methods:{
      afterRead(info) {
      console.log(info)
      this.img = info.content;
    },
     handelAdd(){
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img
      };
      // fetch('', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      // .then(res=>res.json())
      // .then(res=>{
      //   if(res.status == 200){
      //     this.$toast.success('文章发布成功');
          
      //   }else{
      //      this.$toast.fail(res.errMsg)
      //      console.log(res);
      //      console.log(data);
      //   }
      // })
    }
   }
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
      padding-top:3em;
      border-top: 3px solid #eee;
  }
}
</style>
