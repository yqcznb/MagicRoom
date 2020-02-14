<template>
    <div class="mv-tabs">
        <div class="tabs" ref="tabsWrapper">
            <ul ref="tab" class="tab">
                <li v-for="(item,index) in tabs" :key="index" @click="selectItem(index)">
                <router-link tag="div" :to="item.to" class="tab-item">
                    <span class="tab-link">{{item.title}}</span>
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data () {
    return {
      tabs: [
        {
          to: '',
          title: '第一周'
        },
        {
          to: '',
          title: '第二周'
        },
        {
          to: '',
          title: '第三周'
        },
        {
          to: '',
          title: '第四周'
        },
        {
          to: '',
          title: '第五周'
        },
        {
          to: '',
          title: '第六周'
        },
        {
          to: '',
          title: '第七周'
        }
      ],
      mX: 0,
      tabWidth: 80
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initMenu();
    })
  },
  methods: {
    selectItem (index) {
      let tabs = this.$refs.tab
      let moveX = +tabs.style.transform.replace(/[^0-9\-,]/g, '').split(',')[0]
      switch (index) {
        case 0:
          if (moveX <= 0 && moveX > -this.tabWidth) {
            this.mX = 0
          }
          break
        case 1:
          if (moveX <= 0 && moveX > -this.tabWidth * 2) {
            this.mX = 0
          }
          break
        case 2:
          if (moveX < 0 && moveX >= -this.tabWidth * 2) {
            this.mX = 0
          }
          break
        case 3:
          if (moveX <= 0 && moveX >= -this.tabWidth * 2) {
            this.mX = -this.tabWidth
          }
          break
        case 4:
          if (moveX <= 0 && moveX >= -this.tabWidth * 2) {
            this.mX = -this.tabWidth * 2
          } else if (moveX === 0) {
            this.mX = -this.tabWidth * 2
          }
          break
        case 5:
          if (moveX < 0 && moveX > -this.tabWidth * 2) {
            this.mX = -this.tabWidth * 2
          }
          break
        case 6:
          if (moveX > -this.tabWidth * 2 && moveX < -this.tabWidth * 3 / 2) {
            this.mX = -this.tabWidth * 2 + 10
          }
          break
        default:
          break
      }
      tabs.style.transform = `translate(${this.mX}px, 0)`
    },
    _initMenu () {
      let tabsWidth = this.tabWidth
      let width = this.tabs.length * tabsWidth
      this.$refs.tab.style.width = `${width}px`
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tabsWrapper, {
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    .mv-tabs{
        margin-top: 3em;
        width: 100%;
        .tabs{
            height: 2.5rem;
            width: 100%;
            line-height: 2.5rem;
            box-sizing: border-box;
            overflow: hidden;
            white-space: nowrap;
            border-bottom: 0.1em solid rgb(236, 235, 235);
            .tab{
                margin: 0 auto 0;
                .tab-item{
                    float: left;
                    width: 80px;
                    height: 40px;
                    text-align: center;
                    .tab-link{
                        padding-bottom: 5px;
                        color: #333333;
                        color: #d33a31;
                        box-sizing: border-box;
                    }
                }
            }     
        }
    }  
</style>