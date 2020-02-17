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
            <ul class='time_list'> 
              <li v-for="(item,index) in times" :key="index">
                <span>{{item.time}}</span>
              </li>
            </ul>
          </div>
          <div class="name"></div>
        </div>
        <div class="label">
          <ul> 
            <li v-for="(item,index) in label" :key="index">
              <router-link tag="div" :to="item.to">
                <span class="tab-link">{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
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
      label: [
        {to: '',name: '周一'},
        {to: '',name: '周二'},
        {to: '',name: '周三'},
        {to: '',name: '周四'},
        {to: '',name: '周五'},
        {to: '',name: '周六'},
        {to: '',name: '周日'},
      ],
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
        {time: '晚二'},
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
    }
    .timetable{
      height: 60%;
      padding-top: 2%;
      // border: 2px solid rgb(171, 168, 168);
      display: flex;
      justify-content: between;
      .table{
        display: inline-block;
        width: 75%;
        height: 100%;
        // border: 1px solid rgb(238, 91, 91);
        margin-left: 2%;
        display: flex;
        justify-content: space-around;
        box-shadow: 0.2em 0.2em 0.2em 0.2em #ccc;
        .tar{
          width: 5%;
          // border: 1px solid rgb(223, 198, 55);
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
          // border: 1px solid rgb(223, 198, 55);
          background-color: rgb(187, 238, 161);
          border-radius: 10px;
          ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
        .name{
          width: 60%;
          // border: 1px solid rgb(223, 198, 55);
        }
      }
      .label{
        display: inline-block;
        width: 20%;
        height: 100%;
        // border: 1px solid rgb(70, 157, 220);
      }
    }
</style>