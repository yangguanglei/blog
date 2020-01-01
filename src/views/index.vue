<style scoped lang="less">
    #index-all{
        width: 100%;
        height: 1600px;
    }
    #head-center {
        position: relative;
        height: 200px;
        width: 100%;
    }

    #center-spot {
        position: relative;
        width: 100%;
        height: 220px;
        background-color: rgba(0, 0, 0, 0.05);
    }

    #title-center-spot {
        width: 78.5%;
        height: 40px;
        margin: auto;
    }

    #focus-spot {
        position: relative;
        width: 1240px;
        margin: auto;
    }

    .one-focus-spot {
        position: relative;
        display: inline-block;
        width: 267px;
        height: 180px;
        margin-left: 20px;
        margin-right: 20px;
    }

    #content-main {
        position: relative;
        top: 10px;
        width: 1200px;
        height: 1100px;
        margin: auto;
    }

    #important-content {
        position: relative;
        float: left;
        width: 900px;
        height: 1100px;
    }

    #list-content {
        position: relative;
        float: right;
        width: 300px;
        height: 1100px;
    }

    .info-content {
        position: relative;
        width: 100%;
        height: 367px;
    }

    /*#website-notes {*/
        /*position: relative;*/
        /*top: 20px;*/
        /*width: 100%;*/
        /*height: 60px;*/
        /*font-size: 13px;*/
    /*}*/

    /*.beian1 {*/
        /*width: 260px;*/
        /*margin: auto;*/
        /*position: relative;*/
    /*}*/

    /*.beian2 {*/
        /*width: 136px;*/
        /*margin: auto;*/
        /*position: relative;*/
    /*}*/
</style>
<template>
    <div id="index-all">
        <div id="head-center">
            <Carousel height="200px" v-model="value2" loop>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/1.png"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/2.png"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/3.png"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/4.png"></div>
                </CarouselItem>
            </Carousel>
        </div>
        <div id="center-spot">
            <div id="title-center-spot">
                <div style="position: relative;top: 10px;font-size: 1em">推荐:&nbsp;&nbsp;本博客致力于作者自己内心的想法，随意开发，旨在表达自己内心真实的想法</div>
            </div>
            <div id="focus-spot">
                <div class="one-focus-spot">
                    <Card style="width:267px;height: 180px">
                        <div style="text-align:center">
                            <img src="../assets/header.png">
                            <h3>java</h3>
                        </div>
                    </Card>
                </div>
                <div class="one-focus-spot">
                    <Card style="width:267px;height: 180px">
                        <div style="text-align:center">
                            <img src="../assets/header.png">
                            <h3>C#</h3>
                        </div>
                    </Card>
                </div>
                <div class="one-focus-spot">
                    <Card style="width:267px;height: 180px">
                        <div style="text-align:center">
                            <img src="../assets/header.png">
                            <h3>javascript</h3>
                        </div>
                    </Card>
                </div>
                <div class="one-focus-spot">
                    <Card style="width:267px;height: 180px">
                        <div style="text-align:center">
                            <img src="../assets/header.png">
                            <h3>python</h3>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        <div id="content-main">
            <div id="important-content">
                <Card style="width:890px;height: 275px">
                    <div style="text-align:center">
                        <img src="../assets/mainContent.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
                <Card style="width:890px;height: 275px">
                    <div style="text-align:center">
                        <img src="../assets/mainContent.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
                <Card style="width:890px;height: 275px">
                    <div style="text-align:center">
                        <img src="../assets/mainContent.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
                <Card style="width:890px;height: 275px">
                    <div style="text-align:center">
                        <img src="../assets/mainContent.png">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
            </div>
            <div id="list-content">
                <div class="info-content">
                    <Card style="width:100%;height: 100%">
                        <div style="height: 40px"><span>笔记导航</span></div>
                        <div>正文</div>
                    </Card>
                </div>
                <div class="info-content">
                    <Card style="width:100%;height: 100%">
                        <div style="height: 40px"><span>教程导航</span></div>
                        <div>正文</div>
                    </Card>
                </div>
                <div class="info-content">
                    <Card style="width:100%;height: 100%">
                        <div style="height: 40px"><span>资源导航</span></div>
                        <div>正文</div>
                    </Card>
                </div>
            </div>
        </div>
        <!--<div id="website-notes">-->
            <!--<div class="beian1">-->
                <!--<p style="color: black">博客网站&nbsp;&nbsp;&nbsp;一只菜鸟的成长之路&nbsp;&nbsp;&nbsp;&#45;&#45;沐雨辰沨&#45;&#45;</p>-->
            <!--</div>-->
            <!--<div class="beian2">-->
                <!--<a href="http://www.beian.miit.gov.cn/" style="color: black">滇ICP备19009196号-1</a>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>

    export default {
        data() {
            return {
                value2: 0,
            }
        }
    }
</script>
