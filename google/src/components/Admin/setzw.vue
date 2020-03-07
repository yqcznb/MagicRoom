<template>
  <div id="setzw">
    <div class="top">
     <div class="left">
      <router-link to="/jsone">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
      <span>座位设置</span>
    </div>
    <router-view/>
  </div>
  <div class="but">
     <div class="jiangtai">
         讲<svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconjiangtai1"></use>
          </svg>台
     </div>
     <div class="big">
        <div class="rowh">
            <div v-for="row in rows" :key="row">{{row}}</div>
        </div>
        <div class="zuowei">
            <div class="row" v-for="row in rows" :key="row">
                <div class="col" v-for="col in cols" :key="col">
                    <input type="checkbox" name="zw" id="zw" @click="xuanze(row,col)">
                </div>
            </div>
            <div class="colh">
                <div class="col" v-for="col in cols" :key="col">
                    {{col}}
                </div>
            </div>
        </div>
     </div>
     <div class="jieshi">
       <div>
          <input type="checkbox" name="zw" id="zw" checked="checked">已落座
       </div>
       <div>
          <input type="checkbox" name="zw" id="zw" disabled="disabled">空座
       </div>
       <div>
         <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconzhengchang"></use>
         </svg>正常
       </div>
       <div>
         <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconguzhang"></use>
         </svg>故障
       </div>
       <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjinyong"></use>
          </svg>禁用
       </div>
     </div>
     <div class="caozuo">
       <div class="one">
          <div class="left">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconzuowei"></use>
            </svg>
         </div>
         <div class="med">{{hao}}</div>
       </div>
       <div class="two">
          选中座位<input type="text" v-model="zuowei">
       </div>
       <div class="three">
          <div>操作</div>
          <div>
             <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconguzhang"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconweixiuzhong"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconjinyong"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconzhengchang"></use>
            </svg>
          </div>
       </div>
     </div>
  </div>
  </div>
</template>
<script>
export default{
  name:"about",
  data(){
    return{
     aa:"",
     rows:10,
     cols:11,
     hao:"",
     zuowei:"",
    }
  },
  components:{
         
   },
   mounted(){
    this.hao = this.$route.query.id;
   },
   methods:{
     xuanze(a,b){
        var that=this;
        if(that.checked="checked"){
            this.zuowei = "第"+a+"行,第"+b+"列";
        }else{
            this.zuowei = "11";
        }
       
     }
   }
}
</script>
<style lang="scss">
#setzw{
  background: #F9F7F7;
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
    position: relative;
    span{
       position:absolute;
       top:50%;
       left:50%;
       transform: translate(-50%,-50%);
    }
    }
  }
  .but{
      margin-top: 3em;
      border-top: 3px solid #eee;
      .jiangtai{
          margin:0.5em auto;
          .icon {
            width: 1.3em; height: 1.3em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
            margin:0 0.7em;
            }
      }
      .caozuo{
        position:absolute;
        width: 80%;
        background: #FFFDF9;
        border: 1px solid #eee;
        box-shadow:0 0 1em #ccc; 
        left:0;right:0;bottom:0;
        margin:2.5em auto;
        border-radius: 0.5em;
         .icon {
          width: 1.5em; height: 1.5em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        .two,.three{
          width: 100%;
          margin: 0.5em auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .one{
          margin-top: 0.5em;
            .left{
              float: left;
              margin-left: 0.5em;
              position: relative;
              .med{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
              }
            }
        }
      }
      .jieshi{
        margin-top: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
         .icon {
          width: 1em; height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
         input[type=checkbox] {
            margin-right: 5px;
            cursor: pointer;
            font-size: 0.9em;
            width: 0.9em;
            height: 0.9em;
            position: relative;
          }
          input[type=checkbox]:after {
            position: absolute;
            width: 1em;
            height: 1em;
            top: -0.2em;
            content: " ";
            background-color:#fff;
            color: #fff;
            display: inline-block;
            visibility: visible;
            border-radius: 3px;
            border:1px solid #A9A9A9;
          }
          input[type=checkbox]:checked:after {
            content: "✓";
            font-size: 1em;
            background-color: #3c7dfd;
          }
      }
     .big{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        input[type=checkbox] {
            margin-right: 5px;
            cursor: pointer;
            font-size: 0.9em;
            width: 0.9em;
            height: 0.9em;
            position: relative;
          }
          input[type=checkbox]:after {
            position: absolute;
            width: 1em;
            height: 1em;
            top: -0.2em;
            content: " ";
            background-color:#fff;
            color: #fff;
            display: inline-block;
            visibility: visible;
            border-radius: 3px;
            border:1px solid #A9A9A9;
          }
          input[type=checkbox]:checked:after {
            content: "✓";
            font-size: 1em;
            background-color: #3c7dfd;
          }
        .rowh{
            width: 5%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #555;
            color:#fff;
            border-radius: 1em; 
            margin: 0 1% 0 4%;
            div{
                padding:0.5px 0;
            }
       }
      .zuowei{
          width: 90%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .colh{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              background: #555;
              color:#fff;
              border-radius: 1em;
              div{
                  width: 90%;
              }
          }
          .row{ 
              display: flex;
              flex-direction: row;
              justify-content: space-around;
          }
      }
     }
  }
}
</style>
