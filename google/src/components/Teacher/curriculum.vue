<template>
    <div id="main">
      <Common :touxiang="touxiang"></Common>
      <Scroll></Scroll>
      <Timetable></Timetable>
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
                    <use xlink:href="#iconshangsuo1"></use>
                  </svg>
              </div>
              <div class="right">
                <router-link to='/classRoom'>
                  <svg class="icon" >
                    <use xlink:href="#icongengduo1"></use>
                  </svg>
                </router-link>
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
          </div>
        </div>  
    </div>
</template>

<script>
import Common from '../Admin/common';
import Scroll from '../Teacher/scroll';
import Timetable from '../Teacher/timetable';
import { Checkbox, CheckboxGroup } from 'vant';
import echarts from 'echarts';
export default {
  data () {
    return {
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
  },
  components:{
    Common,
    Scroll,
    Timetable
  },
}
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #main{
        text-align: center;
        background: #F9F7F7;
        width: 100%;
        height: 100%;
        position: fixed;
        .main_content{
          width: 100%;
          height: 75%;
          position: fixed;
          .class_card{
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
                height: 100px;
                #mycharts{
                  margin: auto;
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        } 
    } 
</style>