<template>
  <div id="title">
    <div class="top">
        <div class="left">
        <router-link to="/curriculum">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#iconhuabanfuben"></use>
            </svg>
        </router-link>
        <span>课程列表</span>
        </div>
        <router-view/>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div>
        <div class="bq">A</div>
        <ul>
            <li>
              <div class="item" @click="showPopup">
                <div>A前端框架应用试验</div>
                <img src="../../assets/img/admin/detail.png" alt="">
              </div>
            </li>
            <li>
                <div class="item" @click="showPopup">
                  <div>A前端框架应用试验</div>
                  <img src="../../assets/img/admin/detail.png" alt="">
                </div>
            </li>
        </ul>
      </div>
      <div>
        <div class="bq">B</div>
        <ul>
            <li>
              <div class="item" @click="showPopup">
                <div>B前端框架应用试验</div>
                <img src="../../assets/img/admin/detail.png" alt="">
              </div>
            </li>
            <li>
                <div class="item" @click="showPopup">
                  <div>B前端框架应用试验</div>
                  <img src="../../assets/img/admin/detail.png" alt="">
                </div>
            </li>
        </ul>
      </div>
      <div>
        <div class="bq">C</div>
        <ul>
            <li>
              <div class="item" @click="showPopup">
                <div>C前端框架应用试验</div>
                <img src="../../assets/img/admin/detail.png" alt="">
              </div>
            </li>
            <li>
                <div class="item" @click="showPopup">
                  <div>C前端框架应用试验</div>
                  <img src="../../assets/img/admin/detail.png" alt="">
                </div>
            </li>
        </ul>
      </div>
      <div>
        <div class="bq">D</div>
        <ul>
            <li>
              <div class="item" @click="showPopup">
                <div>D前端框架应用试验</div>
                <img src="../../assets/img/admin/detail.png" alt="">
              </div>
            </li>
            <li>
                <div class="item" @click="showPopup">
                  <div>D前端框架应用试验</div>
                  <img src="../../assets/img/admin/detail.png" alt="">
                </div>
                
            </li>
        </ul>
      </div>
      <div>
        <div class="bq">E</div>
        <ul>
            <li>
              <div class="item" @click="showPopup">
                <div>E前端框架应用试验</div>
                <img src="../../assets/img/admin/detail.png" alt="">
              </div>
            </li>
            <li>
                <div class="item" @click="showPopup">
                  <div>E前端框架应用试验</div>
                  <img src="../../assets/img/admin/detail.png" alt="">
                </div>
                
            </li>
        </ul>
      </div>
    </div>
    <!-- 导航区域 -->
    <ul class="navs">
      <li :class="{active: active===0}" @click="scrollTo(0)">
        A
      </li>
      <li :class="{active: active===1}" @click="scrollTo(1)">
        B
      </li>
      <li :class="{active: active===2}" @click="scrollTo(2)">
        C
      </li>
      <li :class="{active: active===3}" @click="scrollTo(3)">
        D
      </li>
      <li :class="{active: active===4}" @click="scrollTo(4)">
        E
      </li>
    </ul>
    <van-popup v-model="show" class="popup-detail" position="right" :style="{ width: '50%',height: '100%' }">
      <div class="color-888 text-l">课程名</div>
      <div class="text-l">A前端框架应用试验</div>
      <div>
        <div class="color-888 pull-left">学时</div>
        <div class="pull-right">48学时</div>
        <div class="clear-both"></div>
      </div>
      <div>
        <div class="color-888 pull-left">学分</div>
        <div class="pull-right">2学时</div>
        <div class="clear-both"></div>
      </div>
       <div class="color-888 text-l">班级</div>
      <div class="text-l">2017级软件1.2班</div>
      <div>
        <div class="color-888 pull-left">授课时间</div>
        <div class="pull-right">1-18周</div>
        <div class="clear-both"></div>
      </div>
      <div class="text-r">单周</div>
      <div class="text-r">周一1，2节</div>
      <div class="color-888 text-l">学生名单</div>
      <table border="0">
        <tr>
          <th>NO</th>
          <th>学号</th>
          <th>姓名</th>
        </tr>
        <tr>
          <td>1</td>
          <td>20170000000</td>
          <td>王欢欢</td>
        </tr>
        <tr>
          <td>2</td>
          <td>20170000000</td>
          <td>王欢欢</td>
        </tr>
        <tr>
          <td>3</td>
          <td>20170000000</td>
          <td>王欢欢</td>
        </tr>
      </table>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
export default {
  props: {},
  data() {
    return {
      active: 0, // 当前激活的导航索引
      show: false,
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, false)
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    showPopup() {
        this.show = true;
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.content div')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      this.active = navIndex
    },
    // 跳转到指定索引的元素
    scrollTo(index) {
      if(index==0){
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        return true
      }
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`.content div:nth-child(${index + 1})`).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop = scrollTop + STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pull-left{
  float: left;
}
.pull-right{
  float: right;
}
.clear-both{
  clear: both;
}
.text-r{
  text-align: right;
}
.text-l{
  text-align: left;
}
.color-888{
  color:#888;
}
*{margin: 0;padding: 0;list-style: none;}
    #title{
        background: #F9F7F7;
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 99999;
            background: #FFFDF9;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            overflow: hidden;
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
    }
  /* 内容区的样式 */
  .content {
    width: 100%;
    overflow: hidden;
    padding-top: 54px;
    .bq{
      padding:10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
  }
  .content li{
    border-bottom: 1px solid #ddd;
  }
  .content .item{
    background: #FFFDF9;
    position: relative;
    height: 3em;
    line-height: 3em;
    >div{
      font-size: 16px;
      margin-left: 10px;
      text-align: left;
    }
    img{
      position: absolute;
      width: 30px;
      z-index: 999;
      right: 40px;
      top: 8px;
    }
  }
  .content li{
      width: 100%;
      height: 10%                                                                            ;
  }
  /* 导航栏的样式 */
  .navs {
    position: fixed;
    top: 12em;
    right: 0.1em ;
    /* background-color: #efefef; */
    z-index: 1000;
  }
  .navs li {
    padding: 0 20px;
    line-height: 1.6;
    // font-size: 24px;
  }
  /* 当导航被点亮后改变颜色 */
  .navs .active{
    color: #d3cece;
  }
  .van-popup.van-popup--right{
    background: #FFFDF9;
  }
  .popup-detail{
    font-size: 14px;
    padding: 0px 10px;
    >div{
      padding: 5px 0px;
    }
    table{
      border: 1px solid #eee;
      width: 100%;
      border-radius: 10px;
      color: #666;
      th{
        border-bottom: 1px solid #eee;
      }
    }
  }
</style>