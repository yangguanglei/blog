<style scoped lang="less">
    #index-all {
        position: relative;
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
        top: 5px;
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

    .main-card {
        width: 890px;
        height: 275px;
        margin-top: 5px;
    }

    .info-content {
        position: relative;
        width: 100%;
        height: 368.6px;
        margin-top: 5px;
    }

    .title-text-h {
        margin: 0 0 10px 0;
    }

    .title-text-all {
        height: 180px;
    }

    .title-text-right {
        position: relative;
        float: left;
        height: 100%;
        width: 630px;
        margin: 0 0 0 40px;
    }

    .title-text-bottom {
        width: 100%;
        margin: 12px 0 0 0;
    }

    .text-a {
        background: #f90;
        color: #fff;
        padding: 5px 10px;
        float: right;
        margin: 5px 0 0 0;
        bottom: 0
    }
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
                <Card class="main-card">
                    <div class="title-text">
                        <h3 class="title-text-h">只愿得一人心</h3>
                        <div class="title-text-all">
                            <img src="../assets/lori.png" style="float: left">
                            <div class="title-text-right" style="float: left">
                                <div style="height: 70%">
                                    <p>你在合适的时候出现，却又在合适的时候离开</p>
                                </div>
                                <div style="height: 30%">
                                    <a class="text-a" @click="viewContent()">阅读全文>></a>
                                </div>
                            </div>
                        </div>
                        <div class="title-text-bottom">
                            <div>
                                <div style="float: left;margin: 0 0 0 8px">
                                    <Icon size="24" type="ios-alarm"/>
                                </div>
                                <div style="float: left;margin: 2px 0 0 5px">
                                    <p>2020-01-01 00:00:00</p>
                                </div>
                            </div>
                            <div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>评论:&nbsp;&nbsp;[<a>20</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>阅读量:&nbsp;&nbsp;[<a>1000</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>类型:&nbsp;&nbsp;[<a>java</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 10px">
                                    <p>作者:&nbsp;&nbsp;[<a>沐雨辰沨</a>]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card class="main-card">
                    <div class="title-text">
                        <h3 class="title-text-h">只愿得一人心</h3>
                        <div class="title-text-all">
                            <img src="../assets/lori.png" style="float: left">
                            <div class="title-text-right" style="float: left">
                                <div style="height: 70%">
                                    <p>你在合适的时候出现，却又在合适的时候离开</p>
                                </div>
                                <div style="height: 30%">
                                    <a class="text-a" @click="viewContent()">阅读全文>></a>
                                </div>
                            </div>
                        </div>
                        <div class="title-text-bottom">
                            <div>
                                <div style="float: left;margin: 0 0 0 8px">
                                    <Icon size="24" type="ios-alarm"/>
                                </div>
                                <div style="float: left;margin: 2px 0 0 5px">
                                    <p>2020-01-01 00:00:00</p>
                                </div>
                            </div>
                            <div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>评论:&nbsp;&nbsp;[<a>20</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>阅读量:&nbsp;&nbsp;[<a>1000</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>类型:&nbsp;&nbsp;[<a>java</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 10px">
                                    <p>作者:&nbsp;&nbsp;[<a>沐雨辰沨</a>]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card class="main-card">
                    <div class="title-text">
                        <h3 class="title-text-h">只愿得一人心</h3>
                        <div class="title-text-all">
                            <img src="../assets/lori.png" style="float: left">
                            <div class="title-text-right" style="float: left">
                                <div style="height: 70%">
                                    <p>你在合适的时候出现，却又在合适的时候离开</p>
                                </div>
                                <div style="height: 30%">
                                    <a class="text-a" @click="viewContent()">阅读全文>></a>
                                </div>
                            </div>
                        </div>
                        <div class="title-text-bottom">
                            <div>
                                <div style="float: left;margin: 0 0 0 8px">
                                    <Icon size="24" type="ios-alarm"/>
                                </div>
                                <div style="float: left;margin: 2px 0 0 5px">
                                    <p>2020-01-01 00:00:00</p>
                                </div>
                            </div>
                            <div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>评论:&nbsp;&nbsp;[<a>20</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>阅读量:&nbsp;&nbsp;[<a>1000</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>类型:&nbsp;&nbsp;[<a>java</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 10px">
                                    <p>作者:&nbsp;&nbsp;[<a>沐雨辰沨</a>]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card class="main-card">
                    <div class="title-text">
                        <h3 class="title-text-h">只愿得一人心</h3>
                        <div class="title-text-all">
                            <img src="../assets/lori.png" style="float: left">
                            <div class="title-text-right" style="float: left">
                                <div style="height: 70%">
                                    <p>你在合适的时候出现，却又在合适的时候离开</p>
                                </div>
                                <div style="height: 30%">
                                    <a class="text-a" @click="viewContent()">阅读全文>></a>
                                </div>
                            </div>
                        </div>
                        <div class="title-text-bottom">
                            <div>
                                <div style="float: left;margin: 0 0 0 8px">
                                    <Icon size="24" type="ios-alarm"/>
                                </div>
                                <div style="float: left;margin: 2px 0 0 5px">
                                    <p>2020-01-01 00:00:00</p>
                                </div>
                            </div>
                            <div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>评论:&nbsp;&nbsp;[<a>20</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>阅读量:&nbsp;&nbsp;[<a>1000</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 0px">
                                    <p>类型:&nbsp;&nbsp;[<a>java</a>]</p>
                                </div>
                                <div style="float: right;margin: 0 20px 0 10px">
                                    <p>作者:&nbsp;&nbsp;[<a>沐雨辰沨</a>]</p>
                                </div>
                            </div>
                        </div>
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
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value2: 0,
            }
        },
        methods: {
            viewContent: function () {
                this.$router.push({path: '/detailedView'});
            }
        }
    }
</script>
