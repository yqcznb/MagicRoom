<template>
  <div id="admin">
       <div> <Common :touxiang="touxiang"></Common></div>
    <div class="class_ad">
       <div class="slide-fullpage">
          <div class="banner-wrapper">
            <div class="slide-banner-scroll" ref="slide">
              <div class="slide-banner-wrapper">
                <div class="slide-item page1">
                    <div class="chen">
                        <span>教室管理</span>
                         <span>Classroom management</span>
                          <span>
                            <svg class="icon" aria-hidden="true" @click="jump(1)">
                              <use xlink:href="#iconjinru"></use>
                            </svg>
                          </span>
                    </div>
                </div>
                <div class="slide-item page2">
                    <div class="chen">
                       <span>教师审核</span>
                       <span>Teacher certification</span>
                       <span>
                            <svg class="icon" aria-hidden="true" @click="jump(2)">
                              <use xlink:href="#iconjinru"></use>
                            </svg>
                          </span>
                    </div>
                </div>
                <div class="slide-item page3">
                    <div class="chen">
                       <span>权限认证</span>
                       <span>Permission audit</span>
                       <span>
                            <svg class="icon" aria-hidden="true" @click="jump(3)">
                              <use xlink:href="#iconjinru"></use>
                            </svg>
                          </span>
                    </div>
                </div>
                <div class="slide-item page4">
                    <div class="chen">
                       <span>文件上传</span>
                       <span>File upload</span>
                       <span>
                            <svg class="icon" aria-hidden="true" @click="jump(4)">
                              <use xlink:href="#iconjinru"></use>
                            </svg>
                          </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
      <div class="docs-wrapper">
              <span
                class="doc"
                v-for="(item, index) in 4"
                :key="index"
                :class="{'active': currentPageIndex === index}"></span>
      </div>
    <div class="rizhi">
      操作日志
    </div>
    <router-view/>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import Common from '../Admin/common'
BScroll.use(Slide)
export default{
  name:"admin",
  data(){
    return{
      touxiang:"1",
      slide: null,
      currentPageIndex: 0,
      playTimer: 0
    }
  },
  components:{
    Common
   },
   mounted(){
    this.init()
   },
   beforeDestroy() {
      clearTimeout(this.playTimer)
      this.slide.destroy()
    },
   methods:{
      jump(num){
        if(num==1){
          this.$router.push({
          path: `/jsone`,
        })
        }
         if(num==2){
          this.$router.push({
          path: `/jstwo`,
        })
        } if(num==3){
          this.$router.push({
          path: `/jsthree`,
        })
        } if(num==4){
          this.$router.push({
          path: `/jsfour`,
        })
        }
      },
      change(num){
        if(num==1){
          this.$router.push({
          path: `/change`,
        })
        }
         if(num==2){
          this.$router.push({
          path: `/email`,
        })
        } if(num==3){
          this.$router.push({
          path: `/about`,
        })
        } if(num==4){
          this.$router.push({
          path: `/set`,
        })
        }
      },
      init() {
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

        // user touches the slide area
        this.slide.on('beforeScrollStart', () => {
          clearTimeout(this.playTimer)
        })
        // user touched the slide done
        // this.slide.on('scrollEnd', () => {
        //    this.autoGoNext()
        // })
        window.bs = this.slide
        // this.autoGoNext()
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
        // this.autoGoNext()
      },
      // autoGoNext() {
      //   clearTimeout(this.playTimer)
      //   this.playTimer = setTimeout(() => {
      //     this.nextPage()
      //   }, 4000)
      // }
    
   }
}
</script>
<style lang="scss">
#admin{
  text-align: center;
  background: #F9F7F7;
  width: 100%;
  height: 100%;
  position: fixed;
  .docs-wrapper{ 
    width: 100%;
    margin:0.5em auto 0 auto;
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
  .class_ad{
    margin-top: 4em;
    width: 70%;
    height:50%;
    background: #FFFDF9;
    margin:4em auto 0 auto;
    border: 1px solid #eee;
    box-shadow:0 0 1em #ccc; 
    .slide-fullpage.view{
      padding: 0;
      height: 100%;
      width: 100%;
      }
    .slide-fullpage{
      height:100%;
      width: 100%;
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
              height:100%;
              width:100%;
              text-align:center;
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
            .slide-item.page1{ 
              background-image: url('../../assets/img/admin/jiaoshi_p.png'); 
              background-repeat:no-repeat;
              background-size:55% 50%;
              background-position: center 15%;
              float: left;   
              } 
              .slide-item.page2{ 
                background-image: url('../../assets/img/admin/jssh.png');
                background-repeat:no-repeat;
                background-size:75% 58%;
                background-position: center 15%;
                float: left;
                }  
              .slide-item.page3{ 
                background-image: url('../../assets/img/admin/quanxian.png');
                background-repeat:no-repeat;
                background-size:60% 60%;
                background-position:top center;
                float: left;
                 } 
              .slide-item.page4{ 
                float: left;
                background-image: url('../../assets/img/admin/upload.png');
                background-repeat:no-repeat;
                background-size:60% 60%;
                background-position:top center;
                }  
          }
        }
      }
    }
  }
  .rizhi{
    width: 80%;
    height:30%;
    background: #FFFDF9;
    margin:0.7em auto 0 auto;
    border: 1px solid #eee;
    box-shadow:0 0 1em #ccc; 
    border-radius: 1em;
    background-image: url('../../assets/img/admin/rizhi.png');
    background-repeat:no-repeat;
    background-size:80% 80%;
    background-position: center;
  }
}
</style>
