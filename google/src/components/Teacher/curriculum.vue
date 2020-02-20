<template>
    <div id="main">
      <Common :touxiang="touxiang"></Common>
      <Scroll></Scroll>
      <div class="timetable">
        <div class="table">
          <div class="tar">
            <div></div>
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
                <span>{{item.name}}<span class="xq">{{item.xq}}</span></span>
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
          <span>详细课程列表</span>
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
            <span>前端框架应用实验</span>
            <div>
              <svg class="icon" >
                <use xlink:href="#iconshangsuo1"></use>
              </svg>
            </div>
          </div>
          <div class="right">
            <svg class="icon" >
              <use xlink:href="#icongengduo1"></use>
            </svg>
          </div>
        </div>
        <div class="shuju"></div>
        <div class="content"></div>
      </div>
    </div>
</template>

<script>
import Common from '../Admin/common';
import Scroll from '../Teacher/scroll';
export default {
  data () {
    return {
      touxiang: '3',
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
    
  },
  methods: {
    
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
        .timetable{
          height: 55%;
          padding-top: 2%;
          display: flex;
          justify-content: between;
          .table{
            display: inline-block;
            width: 75%;
            height: 100%;
            margin-left: 2%;
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
              background-color: rgb(207, 235, 194);
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
                li:nth-child(5){
                  flex-grow: 3;
                }
                li:nth-child(9){
                  flex-grow: 2;
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
                  .xq{
                    float: right;
                    color: #d33a31;
                  }
                }
                li:nth-child(1){
                  padding-top: 0.5em;
                  flex-grow: 2;
                }
                li:nth-child(5){
                  flex-grow: 3;
                }
                li:nth-child(9){
                  flex-grow: 2;
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
          margin-left: 2%;
          box-shadow: 0.1em 0.1em 0.1em 0.1em #ccc;
          display: flex;
          justify-content: center;
          .list{
            width: 20%;
            height: 90%;
            margin: auto 0;
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
          height: 20%;
          margin: 1em auto;
          box-shadow: 0.1em 0.1em 0.1em 0.1em #ccc;
          border-radius: 0.5em;
          .title{
            height: 20%;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-around;
            .left{
              width: 10%;
              border: 1px solid #f3726c;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .middle{
              width: 80%;
              border: 1px solid #ccc;
              span{
                display: inline-block;
                width: 80%;
                height: 100%;
                margin: auto;
              }
              div{
                width: 20%;
                height: 100%;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                .icon{
                  width: 1em;
                }
              }
            }
            .right{
              width: 10%;
              border: 1px solid #fff;
              display: inline-flex;
              flex-direction: column;
              justify-content: center;
              svg{
                margin: auto;
              }
              .icon{
                width: 1.5em;
              }
            }
          }
        }
    } 
</style>