<template>
    <div id="main">
      <Common :touxiang="touxiang"></Common>
      <Scroll></Scroll>
        <div class="main_content">
          <div class="timetable">
            <div class="table">
              <div :style="{ height: '100%' }">
                <van-slider v-model="value" @change="onSlider" vertical />
              </div>
              <div class="time">
                <ul> 
                  <li v-for="(item,index) in times" :key="index">
                    <span>{{item.time}}</span>
                  </li>
                </ul>
              </div>
              <div class="name">
                <ul> 
                  <li v-for="(item,index) in names" :key="index">
                    <span class="classname">{{item.name}}<i class="xq">{{item.xq}}</i></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="label">
              <ul> 
                <li v-for="(item,index) in label" :key="index">
                  <router-link tag="div" :to="item.to">
                    <span>{{item.name}}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="link_list">
            <div class="list">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconliebiao"></use>
              </svg>
            </div>
            <div class="name">
              <router-link to='/list'>
                <span>详细课程列表</span>
              </router-link>
            </div>
          </div>
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
                <svg class="icon" >
                  <use xlink:href="#icongengduo1"></use>
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
                <span>105/120</span>
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
import { Checkbox, CheckboxGroup } from 'vant';
import { Slider } from 'vant';
import echarts from 'echarts';
export default {
  data () {
    return {
      value: 4,
      slider: 5,
      result: [],
      touxiang: '3',
      q_x: false,
      quan_x: true,
      times: [
        {time: '早'},
        {time: '正一'},
        {time: '正二'},
        {time: '正三'},
        {time: '正四'},
        {time: '正五'},
        {time: '正六'},
        {time: '正七'},
        {time: '正八'},
        {time: '晚一'},
        {time: '晚二'}
      ],
      names: [
        {name: '清晨',xq: ''},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '傍晚',xq: ''},
        {name: '傍晚',xq: ''},
      ],
      label: [
        {to: '',name: '周一'},
        {to: '',name: '周二'},
        {to: '',name: '周三'},
        {to: '',name: '周四'},
        {to: '',name: '周五'},
        {to: '',name: '周六'},
        {to: '',name: '周日'},
      ],
    }
  },
  mounted () {
    this.draw();
    this.onSlider();
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
            label: {
              position: 'inner'
            },
            data: [
              {value: 105, name: '已落座',selected: true},
              {value: 15, name: '未落座/15'},
            ],
            color: ['#cfebc2','#f3726c']
          }]
        }
      )
    },
    onSlider(){
      this.value = this.value + this.slider;
    }
  },
  components:{
    Common,
    Scroll
  },
}
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #main{
        text-align: center;
        background: #FFFDF9;
        width: 100%;
        height: 100%;
        position: fixed;
        .main_content{
          width: 100%;
          height: 85%;
          position: fixed;
          .timetable{
            height: 60%;
            padding-top: 1%;
            display: flex;
            justify-content: between;
            margin-left: 6%;
            .table{
              display: inline-block;
              width: 75%;
              height: 100%;
              display: flex;
              justify-content: space-around;
              box-shadow: 0.1em 0.1em 0.1em 0.1em #ccc;
              border-radius: 0.5em;
              .tar{
                width: 5%;
                height: 100%;
                overflow: hidden;
                div{
                  float: right;
                  width: 30%;
                  height: 100%;
                  background-color: #f3726c;
                }
              }
              .time{
                width: 15%;
                background-color: #cfebc2;
                border-radius: 10px;
                ul{
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  li{
                    flex-grow: 1;
                  }
                  li:nth-child(1){
                    padding-top: 0.5em;
                    flex-grow: 2;
                  }
                  li:nth-child(5),li:nth-child(9){
                    flex-grow: 3;
                  }
                }
              }
              .name{
                width: 60%;
                ul{
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  li{
                    flex-grow: 1;
                    overflow: hidden;
                    .classname{
                      background-color: #ccc;
                      border-radius: 2em;
                    }
                    .xq{
                      float: right;
                      color: #d33a31;
                      font-size: 0.4em;
                      padding: 0.4em 0;
                    }
                  }
                  li:nth-child(1){
                    padding-top: 0.5em;
                    flex-grow: 2;
                    span{
                      background-color: #ccc;
                      border-radius: 2em;
                      padding: 0 3em;
                    }
                  }
                  li:nth-child(5),li:nth-child(9){
                    flex-grow: 3;
                  }
                  li:nth-last-child(1),li:nth-last-child(2){
                    span{
                      background-color: #ccc;
                      border-radius: 2em;
                      padding: 0 3em;
                    }
                  }
                }
              }
            }
            .label{
              display: inline-block;
              width: 20%;
              height: 100%;
              ul{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                float: left;
                li{
                  background-color: #ccc;
                  border-radius: 0 1.6em 1.6em 0;
                  padding: 0.8em 0.8em;
                }
              }
            }
          }
          .link_list{
            width: 70%;
            height: 5%;
            border-radius: 0.5em;
            margin-left: 6%;
            box-shadow: 0.1em 0.1em 0.1em 0.1em #ccc;
            display: flex;
            justify-content: center;
            .list{
              width: 20%;
              height: 100%;
              margin: auto 0;
              svg{
                height: 1.5em;
              }
            }
            .name{
              width: 70%;
              height: 80%;
              background-color: rgb(154, 215, 235);
              margin: auto 0;
              border-radius: 0.5em;
              span{
                line-height: 1.5em;
                display: inline-block;
              }
            }
          }
          .class_card{
            width: 80%;
            height: 32%;
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
                height: 90%;
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