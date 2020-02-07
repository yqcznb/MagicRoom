<template>
    <div id="main">
        <div class="left">
            
        </div>
        <div class="middle">
            <span>早</span>
            <span>正一</span>
            <span>正二</span>
            <span>正三</span>
            <span>正四</span>
            <span>正五</span>
            <span>正六</span>
            <span>正七</span>
            <span>正八</span>
            <span>晚一</span>
            <span>晚二</span>
        </div>
        <div class="right">
            <span>早</span>
            <span>正一</span>
            <span>正二</span>
            <span>正三</span>
            <span>正四</span>
            <span>正五</span>
            <span>正六</span>
            <span>正七</span>
            <span>正八</span>
            <span>晚一</span>
            <span>晚二</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #main{
        width: 20%;
        height: 300px;
        background-color: rgb(255, 251, 251);
        box-shadow: 3px 3px 3px 3px rgb(152, 148, 148);
        display: flex;
        justify-content: flex-start;
        .left{
            width: 3px;
            height: 90%;
            background-color: rgb(241, 72, 72);
            margin: 5% 0 0 10%;
        }
        .middle{
            width: 15%;
            height: 90%;
            background-color: rgb(195, 235, 192);
            margin: 5% 0 0 5%;
            span{
                display: inline-block;
                margin-bottom: 10%;
            }
            span:nth-child(1){
                margin-bottom: 30%;
            }
            span:nth-child(5){
                margin-bottom: 40%;
            }
            span:nth-child(9){
                margin-bottom: 30%;
            }
        }
        .right{
           width: 60%;
           height: 90%;
           background-color: rgb(195, 235, 192);
           margin: 5% 0 0 2%;
           span{
               display: block;
               width: 90%;
               height: 5%;
               line-height: 80%;
               background-color: rgb(43, 93, 193);
               margin: 0 0 6% 5%;
               border-radius: 10px;
           } 
           span:nth-child(1){
                margin-bottom: 12%;
            }
            span:nth-child(5){
                margin-bottom: 15%;
            }
            span:nth-child(9){
                margin-bottom: 10%;
            }
        }
    }
</style>