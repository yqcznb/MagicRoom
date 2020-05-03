<template>
    <div class="time-table">
      <div class="timetable">
          <div class="table">
            <div :style="{ height: '360px' }">
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
                  <div class="classname" v-if="!item.time">{{item.name}}<span>{{item.xq}}</span></div>
                  <div class="classname time-color" v-else>{{item.name}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="label">
            <ul> 
              <li v-for="(item,index) in label" :key="index" :class="{'active':week==index}" @click="weekBtn(index)">
                <router-link tag="div" :to="item.to">
                  <span >{{item.name}}</span>
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
              <div class="">详情</div>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
import { Slider } from 'vant';
export default {
  data () {
    return {
      value:4,
      slider: 5,
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
        {name: '清晨',xq: '',time:true},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '中午',xq: '',time:true},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
        {name: '傍晚',xq: '',time:true},
        {name: '前端框架应用',xq: '详情》'},
        {name: '前端框架应用',xq: '详情》'},
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
      week:0
    }
  },
  mounted () {
    this.onSlider();
  },
  methods: {
    onSlider(){
      this.value = this.value + this.slider;
    },
    weekBtn(data){
      this.week = data
    }
  },
}
</script>

<style lang="scss">
    *{margin: 0;padding: 0;list-style: none;}
    .time-table{
      .timetable{
          height: 60%;
          padding-top: 1%;
          display: flex;
          justify-content: between;
          margin-left: 6%;
          .van-slider{
            background-color: #EC7261;
            .van-slider__bar{
              background-color: #EC7261;
              .van-slider__button {
                  width: 10px;
                  height: 10px;
                  border: 2px solid;
              }
            }          
          }
          .table{
            display: inline-block;
            width: 75%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            box-shadow: 0.1em 0.1em 0.1em 0.1em #ccc;
            border-radius: 0.5em;
            background: #FFFDF9;
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
              font-size: 12px;
              ul{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                li{
                  flex-grow: 1;
                }
                li:nth-child(1){
                  padding-top: 0.3em;
                  flex-grow: 1;
                }
                li:nth-child(5),li:nth-child(9){
                  flex-grow: 3;
                }
              }
            }
            .name{
              width: 65%;
              .time-color{
                background-color: #cfebc2!important;
                padding: 0px 4em;
                margin-top: 5px;
              }
              ul{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                li{
                  flex-grow: 1;
                  >div{
                    border-radius: 2em;
                    padding: 0px 10px;
                    line-height: 2em;
                    font-size: 12px;
                    height: 20px;
                    line-height: 20px;
                    position: relative;
                    >span{
                      color: #FBA66A;
                      padding-left: 5px;
                      position: absolute;
                      right: 3px;
                      top: 2px;
                    }
                  }
                  &:nth-child(2n){
                    div{
                      background-color: #E9E8BC;
                    }
                  }
                  &:nth-child(2n+1){
                    div{
                      background-color: #BCCCD9;
                    }
                  }
                  &:nth-child(3n+1){
                    div{
                      background-color: #F0DFD7;
                    }
                  }
                   &:nth-child(4n+1){
                    div{
                      background-color: #D8E0D1;
                    }
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
                padding: 0.8em 0.5em;
                box-shadow: 1px 1px 5px #ccc;
                width: 35px;
                &.active{
                  padding: 1em 1em;
                }
                &:nth-child(2n){
                    background-color: #E9E8BC;
                  }
                  &:nth-child(2n+1){
                    background-color: #BCCCD9;
                  }
                  &:nth-child(3n+1){
                    background-color: #F0DFD7;
                  }
                   &:nth-child(4n+1){
                    background-color: #D8E0D1;
                  }
              }
            }
          }
        }
        .link_list{
          background: #FFFDF9;
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
            text-align:left;
            padding-left: 10px;
            position: relative;
            span{
              line-height: 1.5em;
              display: inline-block;
            }
            div{
              color:#FBA66A;
              position: absolute;
              right: 5px;
              top: 0px;
              font-size: 14px;
            }
          }
        }
    }  
</style>