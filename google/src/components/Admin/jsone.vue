<template>
  <div id="about">
    <div class="top">
     <div class="left">
      <router-link to="/admin">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#iconhuabanfuben"></use>
          </svg>
      </router-link>
      <span>教学楼</span>
    </div>
    <router-view/>
  </div>
  <div class="but">
     <div class="but_left">
        <div class="slide-fullpage">
          <div class="banner-wrapper">
            <div class="slide-banner-scroll" ref="slide">
              <div class="slide-banner-wrapper">
                <div class="slide-item" v-for="list in lists" :key="list.id" :style="list.icon">
                    <div class="chen">
                        <span>{{list.one}}</span>
                         <span>{{list.two}}</span>
                          <span v-if="list.id%2==1">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#iconfangjian2"></use>
                            </svg>
                          </span>
                           <span v-else>
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#iconfangjian"></use>
                            </svg>
                          </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
     </div>
     <div class="but_right">
       <ul>
         <li v-for="count in this.floor" :key="count" :style="randomRgb(item)" > {{count}}F</li>
       </ul>
     </div>
     <div class="docs-wrapper">
              <span
                class="doc"
                v-for="(item, index) in bu_num"
                :key="index"
                :class="{'active': currentPageIndex === index}"></span>
      </div>
       <div class="class_list">
          <div class="list_top">
            <div class="quanxuan">
              <input type="checkbox" name="quanxuan" id="quanxuan">全选
            </div>
            <div class="class_mu">
              教室列表
            </div>
          </div>
          <div class="class_middle">
            <div class="leii">
                <div>入口</div><div>选择</div> <div>教室</div> <div>所属院系</div><div>状态</div>
            </div>
            <div class="lei" v-for="list in 10" :key="list">
                <router-link to="/setzw">
                   <svg class="icon" aria-hidden="true" @click="tiao">
                    <use xlink:href="#iconrukou"></use>
                  </svg>
                </router-link>
                  <input type="checkbox" name="quanxuan" id="quanxuan">
                  <div>1308</div>
                  <div>信息工程学院</div>
                  <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconzhengchang"></use>
                    </svg> 
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconweixiuzhong"></use>
                    </svg> 
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconjinyong1"></use>
                    </svg>
                  </div>
            </div>
          </div>
          <div class="class_botton">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconzhengchang"></use>
            </svg> 正常
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconweixiuzhong"></use>
            </svg> 维护
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconjinyong1"></use>
            </svg>禁用
          </div>
       </div>
  </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
BScroll.use(Slide)
export default{
  name:"about",
  data(){
    return{
     aa:"",
     jiao:"",
     floor:"",
     slide: null,
     currentPageIndex: 0,
     playTimer: 0,
     bu_num:4,
     item:"",
     lists:[
       {one:"1号教学楼",two:"Teaching building 1",id:1,
       'icon': {
            backgroundImage:
            "url(" + require('../../assets/img/admin/jiaoxuelou1.png') + ")",
          },
          floor:4
       },
       {one:"2号教学楼",two:"Teaching building 2",id:2,
       'icon': {
            backgroundImage:
            "url(" + require('../../assets/img/admin/jiaoxuelou2.png') + ")",
          },
          floor:5
       },
       {one:"3号教学楼",two:"Teaching building 3",id:3,
       'icon': {
            backgroundImage:
            "url(" + require('../../assets/img/admin/jiaoxuelou3.png') + ")",
          },
          floor:6
       },
       {one:"4号教学楼",two:"Teaching building 4",id:4,
       'icon': {
            backgroundImage:
            "url(" + require('../../assets/img/admin/jiaoxuelou4.png') + ")",
          },
          floor:4
       },
     ]
    }
  },
   mounted(){
    this.init()
   },
   beforeDestroy() {
      clearTimeout(this.playTimer)
      this.slide.destroy()
    },
    methods:{
      tiao(){
        this.$router.push({
           path:'/setzw',
           query:{
             id:1308
          }
        });
      },
      randomRgb(item) {
        let R = Math.floor(Math.random() * 130+110);
        let G = Math.floor(Math.random() * 130+110);
        let B = Math.floor(Math.random() * 130+110);
        return {
          background: 'rgb(' + R + ',' + G + ',' + B + ')'
        };
      },
       init() {
          this.lists.filter(item=> {
                     if(item.id == 1){
                         this.floor = item.floor
                     }
                 })
        clearTimeout(this.playTimer)
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          slide: {
            loop: true,
            threshold: 100
          },
          useTransition: true,
          momentum: false,
          bounce: false,
          stopPropagation: true,
          click:true
        })
        this.slide.on('scrollEnd', this._onScrollEnd)
        this.slide.on('beforeScrollStart', () => {
          clearTimeout(this.playTimer)
        })
        window.bs = this.slide
      },
      nextPage() {
        this.slide.next()
      },
      prePage() {
        this.slide.prev()
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        this.jiao = this.currentPageIndex+1
        this.lists.filter(item=> {
                     if(item.id == this.jiao){
                         this.floor = item.floor
                     }
                 })
      }
    }
}
</script>
<style lang="scss">
#about{
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
      padding-top: 1em;
      border-top: 3px solid #eee;
      width: 100%;
      height: 100%;
    .class_list{
    width: 80%;
    height: 38%;
    background: #FFFDF9;
    border: 1px solid #eee;
    box-shadow:0 0 1em #ccc; 
    margin: 2.5em auto;
    border-radius: 0.5em;
    .class_botton{
      width: 100%;
      height: 11%;
      box-sizing:border-box;
      border-top: 1px solid #ccc;
      display: flex;
      flex-direction: row;
      justify-content:space-around;
      align-items: center;
      .icon {
      width: 1.2em; height: 1.2em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      }
    }
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
    .list_top{
      width: 100%;
      height: 11%;
      box-sizing:border-box;
      border-bottom: 1px solid #ccc;
       position: relative;
      .quanxuan{
        display: inline-block;
        float: left;
        position:absolute;
        top:50%;
        left:10%;
        transform: translate(-10%,-50%);

      }
      .class_mu{
        display: inline-block;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }
    .class_middle{
      width: 100%;
      height: 78%;
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      overflow-x: hidden;
      overflow-y: scroll;
      font-size: 14px;
      .lei{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        a{
          cursor: pointer;
        }
      }
      .leii{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        margin-left: -0.5em;
       div:nth-child(2),div:nth-child(3){
          margin-left: -1.8em;
       }
      }
    }
  }
  .docs-wrapper{ 
    width: 80%;
    float: left;
    margin-top:0.5em;
           .doc{
              display :inline-block;
              margin :0 4px;
              width :2em;
              height :0.5em;
              border-radius :0.5em;
              background :#eee;
           }
           .doc.active{
              width :2em;
              height :0.5em;
             background :#aaa;
           }
        }
      .but_left{
        float: left;
        display: inline-block;
        width: 80%;
        height: 44%;

        .slide-fullpage.view{
      padding: 0;
      height: 100%;
      width: 100%;
      }
        .slide-fullpage{
          height:100%;
          width: 80%;
          background: #FFFDF9;
          margin: 0 auto;
          border: 1px solid #eee;
          box-shadow:0 0 1em #ccc; 
          .banner-wrapper{
            width: 100%;
            height:100%;
            .slide-banner-scroll{
              height:100%;
              width: 100%;
              overflow:hidden;
              .slide-banner-wrapper{
                height:100%;
                width: 100%;
                .slide-item{
                  display:inline-block;
                  float: left;
                  height:100%;
                  width:100%;
                  text-align:center;
                  background-repeat:no-repeat;
                  background-size:75% 58%;
                  background-position: center 15%;
                  .chen{ 
                      width: 100%;
                      height: 50%;
                      margin-top: 80%;
                      font-size: 1em;
                      display: flex;
                      flex-direction: column;
                      span:last-child{
                        padding: 1em;;
                      }
                    }          
                }
          }
        }
      }
    }
      }
      .but_right{
        display: inline-block;
        width: 20%;
        height: 44%;
        ul{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          li{
            width: 60%;
            max-height: 17%;
            border-radius: 50% 0 0 50%;
            flex-grow:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid #ccc;
          }
        }
      }
  }
}
</style>
