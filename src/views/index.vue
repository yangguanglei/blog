<style scoped lang="less">
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
        width: 100%;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.22);
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
        background-color: #2baee9;
    }

    #content-main {
        position: relative;
        top: 10px;
        width: 1200px;
        height: 1100px;
        margin: auto;
        background-color: #e97780;
    }

    #important-content {
        position: relative;
        float: left;
        width: 900px;
        height: 1100px;
        background-color: #e9e376;
    }

    #list-content {
        position: relative;
        float: right;
        width: 300px;
        height: 1100px;
        background-color: #43e3e9;
    }

    .info-content {
        position: relative;
        width: 100%;
        height: 367px;
        background-color: #d145e9;
    }

    #website-notes {
        position: relative;
        top: 20px;
        width: 100%;
        height: 60px;
        font-size: 13px;
    }
    .beian1{
        width: 260px;
        margin: auto;
        position: relative;
    }
    .beian2{
        width: 136px;
        margin: auto;
        position: relative;
    }
</style>
<template>
    <div>
        <div id="head-center">
            <Carousel height="200px" v-model="value2" loop>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/logo.png"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/logo1.png"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/logo.png"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/logo3.png"></div>
                </CarouselItem>
            </Carousel>
        </div>
        <div id="center-spot">
            <div id="title-center-spot">
                <span>推荐</span>
            </div>
            <div id="focus-spot">
                <div class="one-focus-spot">
                    java
                </div>
                <div class="one-focus-spot">
                    C#
                </div>
                <div class="one-focus-spot">
                    javascript
                </div>
                <div class="one-focus-spot">
                    python
                </div>
            </div>
        </div>
        <div id="content-main">
            <div id="important-content">
                <List item-layout="vertical">
                    <ListItem v-for="item in data" :key="item.title">
                        <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description"/>
                        {{ item.content }}
                        <template slot="action">
                            <li>
                                <Icon type="ios-star-outline"/>
                                123
                            </li>
                            <li>
                                <Icon type="ios-thumbs-up-outline"/>
                                234
                            </li>
                            <li>
                                <Icon type="ios-chatbubbles-outline"/>
                                345
                            </li>
                        </template>
                        <template slot="extra">
                            <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
                                 style="width: 280px">
                        </template>
                    </ListItem>
                </List>
            </div>
            <div id="list-content">
                <div class="info-content">
                    <div style="height: 40px; background-color: #9a6e3a"><span>笔记导航</span></div>
                </div>
                <div class="info-content">
                    <div style="height: 40px; background-color: #9a6e3a"><span>教程导航</span></div>
                </div>
                <div class="info-content">
                    <div style="height: 40px; background-color: #9a6e3a"><span>资源导航</span></div>
                </div>
            </div>
        </div>
        <div id="website-notes">
            <div class="beian1">
                <p style="color: black">博客网站&nbsp;&nbsp;&nbsp;一只菜鸟的成长之路&nbsp;&nbsp;&nbsp;--沐雨辰沨--</p>
            </div>
            <div class="beian2">
                <a href="http://www.beian.miit.gov.cn/" style="color: black">滇ICP备19009196号-1</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Card from "../../dist/vendors";

    export default {
        components: {Card},
        data() {
            return {
                value2: 0,
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 4',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 5',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 6',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        }
    }
</script>
