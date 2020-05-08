<template>
    <div id="main" :class="{'back':repair||sett}" @click="close($event)">
      <div class="top">
        <div class="left">
          <router-link to="/curriculum">
              <svg class="icon" aria-hidden="true" >
                  <use xlink:href="#iconhuabanfuben"></use>
              </svg>
          </router-link>
          <span>到课情况</span>
          </div>
          <router-view/>
      </div>
      <div class="room" :class="{'backw':repair||sett}">
        <div class="room-head">
          <div class="jiangtai">
            <div>讲</div>
            <svg class="icon" >
              <use xlink:href="#iconjiangtai1"></use>
            </svg>
            <div>台</div>
          </div>
          <div class="tips" v-if="!repair && !sett">
            <div>
              <div>已落座</div>
              <van-checkbox shape="square" icon-size="15px" :value="true"></van-checkbox>
            </div>
            <div>
              <div>空座</div>
              <van-checkbox shape="square" icon-size="15px" :value="false"></van-checkbox>
            </div>
            <div>
              <div>故障</div>
              <svg class="icon" >
                <use xlink:href="#iconguzhang"></use>
              </svg>
            </div>
            <div>
              <div>禁用</div>
              <svg class="icon" >
                <use xlink:href="#iconjinyong"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="room-all">
          <div class="ro room-left">
            <div v-for="i in 11" :key="i" :class="{'lie':hanShow}">
              <div v-for="j in 6" :key="j">
                <van-checkbox shape="square" v-if="(i!=10 || j>2) && (i!=11 || j>2)" icon-size="15px" :value="(i!=10 || j<2) && (i!=11 || j<2)"></van-checkbox>
              </div>
            </div>
          </div>
          <div class="ro room-right">
            <div v-for="i in 11" :key="i" :class="{'lie':hanShow}">
              <div v-for="j in 7" :key="j">
                <van-checkbox shape="square"  icon-size="15px" :value="(i!=10) && (i!=11)"></van-checkbox>
                <svg class="icon" v-if="i==10 && j==1">
                  <use xlink:href="#iconguzhang"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="num-left">
            <div v-for="i in 11" :key="i">{{i}}</div>
          </div>
          <div class="num-bottom">
            <div v-for="i in 13" :key="i">{{i}}</div>
          </div>
          <div class="gd">过道</div>
        </div>
      </div>
      <div class="main_content">
        <div class="class_card">
          <div class="title">
            <div class="left">
              <svg class="icon" >
                <use xlink:href="#iconlive"></use>
              </svg>
            </div>
            <div class="middle">
              <span class="middle_title">前端框架应用实验</span>
                <svg class="icon" >
                  <use xlink:href="#iconjiesuo"></use>
                </svg>
            </div>
          </div>
          <div class="shuju">
            <div class="class">
              <span>教室</span>
              <span>2602</span>
            </div>
            <div class="renshu">
              <span>已落座</span>
              <span>{{lzrs}}/{{zrs}}</span>
            </div>
          </div>
          <div class="charts">
            <div class="tools">
              <div class="student">
                <span>课代表</span>
                <span>张奥</span>
              </div>
              <van-checkbox-group v-model="result">
                <van-checkbox shape="square" icon-size="0.8em" name="a" @click="quanx()" v-show='quan_x'>全选</van-checkbox>
                <van-checkbox shape="square" icon-size="0.8em" name="a" @click="qx()" v-show='q_x'>取消</van-checkbox>
                <van-checkbox shape="square" icon-size="0.8em" name="b">门锁</van-checkbox>
                <van-checkbox shape="square" icon-size="0.8em" name="c">座位锁</van-checkbox>
                <van-checkbox shape="square" icon-size="0.8em" name="d">多媒体</van-checkbox>
              </van-checkbox-group>
            </div>
            <div class="chart">
              <div id="mycharts" ref="ch"></div>
            </div>
          </div>
          <div class="repair">
            <div :class="repair?'title2':'title1'" @click.stop="sett = false;repair = !repair">
              <svg class="icon">
                <use xlink:href="#iconbaoxiuxitong"></use>
              </svg>
              <div class="center">反馈保修</div>
              <div class="submit" v-if="repair">提交</div>
            </div>
            <div class="content1" v-if="repair">
              <div>
                <van-checkbox shape="square" v-model="cheack1" icon-size="0.8em">门</van-checkbox>
                <van-checkbox shape="square" v-model="cheack2" icon-size="0.8em">教师机</van-checkbox>
                <van-checkbox shape="square" v-model="cheack3" icon-size="0.8em">幕布</van-checkbox>
                <van-checkbox shape="square" v-model="cheack4" icon-size="0.8em">投影仪</van-checkbox>
                <van-checkbox shape="square" v-model="cheack5" icon-size="0.8em">其他</van-checkbox>
              </div>
              <div>
                <div>
                  <van-checkbox shape="square" v-model="cheack6" icon-size="0.8em">座位</van-checkbox>
                  <van-checkbox shape="square" v-model="cheack7" icon-size="0.8em">排选择</van-checkbox>
                  <van-checkbox shape="square" v-model="cheack8" icon-size="0.8em">列选择</van-checkbox>
                </div>
                <div>
                  <textarea name="" id="" placeholder="备注："></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="repair">
            <div :class="sett?'title2':'title1'" @click.stop="repair=false;sett = !sett">
              <svg class="icon">
                <use xlink:href="#iconzuowei"></use>
              </svg>
              <div class="center">座位设置</div>
              <div class="submit" v-if="sett">确定</div>
            </div>
            <div class="content1" v-if="sett">
              <div>
                <van-radio-group v-model="radio1">
                  <van-radio name="1" icon-size="0.8em">禁用</van-radio>
                  <van-radio name="2" icon-size="0.8em">解除禁用</van-radio>
                </van-radio-group>
                <div class="dis-flex">
                  <van-checkbox shape="square" v-model="cheack9" icon-size="0.8em">列选择</van-checkbox>
                  <van-checkbox shape="square" v-model="cheack10" @change="han" icon-size="0.8em">行选择</van-checkbox>
                </div>
              </div>
              <div class="teat1">
                <textarea name="" id="" placeholder="备注："></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from 'vant';
import echarts from 'echarts';
export default {
  data () {
    return {
      repair:false,
      sett:false,
      hanShow:false,
      radio1:'1',
      cheack1:false,
      cheack2:false,
      cheack3:false,
      cheack4:false,
      cheack5:false,
      cheack6:false,
      cheack7:false,
      cheack8:false,
      cheack9:true,
      cheack10:false,
      zrs: 125,
      lzrs: 55,
      result: [],
      touxiang: '3',
      q_x: false,
      quan_x: true
    }
  },
  mounted () {
    this.draw();
  },
  created () {
  },
  methods: {
    close(e){
      if(e.target.attributes['class'].nodeValue && (e.target.attributes['class'].nodeValue=='main_content' || e.target.attributes['class'].nodeValue=='back')){
        this.repair = false
        this.sett = false
      }
    },
    quanx(){
      this.result = ['a','b','c','d'];
      this.q_x = true;
      this.quan_x = false;
    },
    qx(){
      this.result = [''];
      this.quan_x = true;
      this.q_x = false;
    },
    han(e){
      this.hanShow = e
    },
    draw(){
      var chart = this.$refs.ch;
      var myChart = echarts.init(chart);
      // 指定图表的配置项和数据
      myChart.setOption(
        {
          series: [{
            type: 'pie',
            radius: '80%',
            data: [
              {value: this.lzrs, name: '已落座',selected: true},
              {value: this.zrs-this.lzrs, name: '未落座'},
            ],
            color: ['#cfebc2','#f3726c'],
            itemStyle:{ 
              normal:{ 
                label:{ 
                  position: 'inner',
                  show: true, 
                  formatter: '{b} : {c}' 
                }, 
              } 
						} 
          }]
        }
      )
    }
  }
}
</script>
<style lang="scss">
  .van-checkbox__icon{
    background: #fff;
  }
</style>
<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #main{
        padding-top: 52px;
        text-align: center;
        background: #F9F7F7;
        width: 100%;
        height: 100%;
        &.back{
          background: #B9B7B7;
        }
        .room{
          margin: 0 10px;
          &.backw{
            background: #fff;
          }
          .room-head{
            position: relative;
            .jiangtai{
              display: flex;
              font-size: 0.6em;
              width: 10em;
              margin: 0 auto;
              justify-content: center;
              margin-top: 10px;
              padding-left: 20px;
              .icon{
                width: 2em;
                height: 2em;
                font-size: 1em;
              }
              >div{
                line-height: 26px;
                margin: 0px 20px;
              }
            }
            .tips{
              position: absolute;
              right: 10px;
              display: flex;
              font-size: 12px;
              top:-3px;
              .icon{
                width: 1.2em;
                height: 1.2em;
              }
              .van-checkbox{
                justify-content: center;
              }
              >div{
                justify-content: center;
                text-align: center;
              }
            }
          }
          .room-all{
            display: flex;
            height: 265px;
            margin: 10px 0px 20px 20px;
            position: relative;
            .num-left{
              position: absolute;
              left: -18px;
              background: #4C4C4C;
              color: #fff;
              font-size: 12px;
              border-radius: 20px;
              padding:0 2px;
              top:2px;
              text-align: center;
              >div{
                height: 22px;
                line-height: 22px;
                &:nth-child(4){
                  margin-top: 3px;
                }
              }
            }
            .num-bottom{
              width: 100%;
              position: absolute;
              left:0px;
              background: #4C4C4C;
              color: #fff;
              font-size: 12px;
              border-radius: 20px;
              padding:1px 0px;
              bottom:0px;
              text-align: center;
              display: flex;
              height: 16px;
              line-height: 16px;
              >div{
                &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5),&:nth-child(6){
                  width: 8%;
                }
                &:nth-child(7),&:nth-child(8),&:nth-child(9),&:nth-child(10),&:nth-child(11),&:nth-child(12),&:nth-child(13){
                  width: 7%;
                }
                &:nth-child(6){
                  margin-right: 10px;
                }
                &:nth-child(7){
                  margin-left: 10px;
                }
              }
            }
            .ro{
              width: 50%;
              >div{
                display: flex;
                margin:7px 0;
                &.lie{
                  background: #E8E8E8;
                }
                >div{
                  width: 16.6666%;
                  position: relative;
                  >div{
                    justify-content: center;
                  }
                  .icon{
                    position: absolute;
                    top: 0px;
                    width: 1em;
                    height: 1em;
                    left: 50%;
                    transform: translateX(-50%);
                  }
                }
                
              }
            }
            .room-left{
              border-right: 1px dotted #aaa;
              >div{
                padding-right:10px;
              }
            }
            .room-right{
              >div{
                padding-left:10px;
                >div{
                  width: 14.2%;
                }
              }
            }
            .gd{
              position: absolute;
              transform: translateX(-50%);
              left: 50%;
              width: 20px;
              line-height: 100px;
              font-size: 15px;
              top: 10px;
            }
          }
        }
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
        .main_content{
          width: 100%;
          height: 75%;
          .class_card{
            background: #fff;
            width: 84%;
            margin: 2% 0 0 8%;
            box-shadow: 0.1em 0.1em 0.1em 0.1em #ccc;
            border-radius: 0.5em;
            .title{
              height: 20%;
              border-bottom: 1px solid #ccc;
              display: flex;
              justify-content: space-around;
              .left{
                width: 10%;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
              .middle{
                width: 80%;
                height: 100%;
                display:flex;
                justify-content: center;
                align-items: center;
                  .icon{
                    width: 1em;
                  }
              }
              .right{
                width: 10%;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                .icon{
                  width: 1.5em;
                }
              }
            }
            .shuju{
              height: 20%;
              display: flex;
              justify-content: space-around;
              .class{
                width: 40%;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              .renshu{
                width: 60%;
                display: flex;
                justify-content: space-around;
                align-items: center;
              } 
            }
            .charts{
              height: 60%;
              display: flex;
              justify-content: space-around;
              .tools{
                width: 40%;
                border-top: 0.1em solid #ccc;
                .student{
                  display: flex;
                  justify-content: space-around;
                }
                .van-checkbox{
                  margin-left: 0.5em; 
                }
              }
              .chart{
                width: 60%;
                height: 110px;
                #mycharts{
                  margin: auto;
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .repair{
              border-top: 1px solid #ddd;
              .title1{
                display: flex;
                width: 100px;
                margin: auto;
                font-size: 15px;
                padding: 5px 0;
                .icon{
                  width: 1.2em;
                  height: 1.2em;
                  margin-right: 3px;
                  position: relative;
                  top: 2px;
                }
              }
              .title2{
                display: flex;
                margin: auto;
                font-size: 15px;
                padding: 5px 0;
                position: relative;
                .center{
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                }
                .submit{
                  position: absolute;
                  right: 10px;
                }
                .icon{
                  width: 1.2em;
                  height: 1.2em;
                  margin-right: 3px;
                  position: relative;
                  top: 2px;
                  left: 10px;
                }
              }
              .content1{
                display: flex;
                font-size: 14px;
                border-top: 1px solid #ddd;
                padding: 10px;
                .dis-flex{
                  display: flex;
                  >div{
                    margin-right: 10px;
                  }
                }
                textarea{
                  width: 100%;
                  margin-top: 30px;
                  border-radius: 3px;
                  height: 40px;
                }
                .teat1{
                  textarea{
                    width: 100%;
                    margin-top: 0px;
                    border-radius: 3px;
                    height: 60px;
                  }
                }
                >div{
                  &:first-child{
                    min-width: 90px;
                  }
                  &:last-child{
                    flex: 1;
                    padding-right: 5px;
                    >div{
                      display: flex;
                      >div{
                        margin-right: 5px;
                      }
                    }
                  }
                }
              }
            }
          }
        } 
    } 
</style>