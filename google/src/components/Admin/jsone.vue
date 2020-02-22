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
    span{
        margin-left: 30%;
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
