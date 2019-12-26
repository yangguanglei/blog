<style scoped lang="less">
    #home-head {
        position: fixed;
        z-index: 999;
        background-color: white;
        width: 100%;
        line-height: 0;
    }

    #home-head:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #dcdee2;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    #head-logo {
        position: relative;
        height: 70px;
        width: 312px;
        display: inline-block;
        padding: 2px;
        margin-right: 10px;
    }

    #head-right {
        display: inline-block;
        float: right;
        margin: 14px 0;
    }

    #head-menu {
        left: 20px;
        display: inline-block;
    }

    span {
        font-size: 18px;
    }

    #logo-img {
        float: right;
        display: block;
        background-image: url("../assets/logo.png");
        background-size: cover;
        width: 145px;
        height: 65px;
    }

    #login-ico {
        width: 120px;
        float: right;
        margin-right: 154px;
        margin-top: 10px;
    }

    #select-project {
        float: right;
        margin-right: 20px;
        width: 220px;
    }

    #logo-img {
        display: inline-block;
    }

    #home-content {
        position: relative;
        top: 70px;
        width: 100%;
        overflow: hidden;
    }

    #user-dropdown {
        text-align: right;
    }
</style>

<template>
    <div id="home" style="height: 100%;width: 100%">
        <div id="home-head">
            <div id="head-logo">
                <a id="logo-img"></a>
            </div>
            <Menu mode="horizontal" :theme="theme1" active-name="1" id="head-menu">
                <MenuItem name="1">
                    <router-link to="/index" tag="li"><span>首页</span></router-link>
                </MenuItem>
                <MenuItem name="2">
                    <router-link to="/index" tag="li"><span>印象笔记</span></router-link>
                </MenuItem>
                <MenuItem name="3">
                    <router-link to="/index" tag="li"><span>IT教程</span></router-link>
                </MenuItem>
                <MenuItem name="4">
                    <router-link to="/index" tag="li"><span>软件分享</span></router-link>
                </MenuItem>
                <MenuItem name="5">
                    <router-link to="/index" tag="li"><span>代码迭代</span></router-link>
                </MenuItem>
                <MenuItem name="6">
                    <router-link to="/index" tag="li"><span>关于我</span></router-link>
                </MenuItem>
            </Menu>
            <div id="head-right">
                <div id="login-ico">
                    <Dropdown trigger="click" style="margin-left: 20px">
                        <Avatar icon="ios-person"></Avatar>
                        <a style="color: black;" onmouseover="this.style.color = '#2d8cf0'"
                           onmouseout="this.style.color = 'black'">
                            <span>{{user_name}}</span>
                        </a>
                        <Dropdown-menu slot="list" id="user-dropdown">
                            <Dropdown-item @click.native="logout()">
                                <span>注销</span>
                            </Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                </div>
                <div id="select-project">
                    <Input shape="circle" style="top: 10px" search placeholder="输入关键字"/>
                </div>
            </div>
        </div>
        <div id="home-content">
            <router-view name="menurouter"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                user_name: '用户名',
                theme1: 'light',
                projectSelect: [
                    {
                        value: '项目1',
                        label: '项目1'
                    },
                    {
                        value: '项目2',
                        label: '项目2'
                    },
                    {
                        value: '项目3',
                        label: '项目3'
                    },
                    {
                        value: '项目4',
                        label: '项目4'
                    }
                ],
                model1: []
            }
        },
        methods: {
            logout() {
                var var1 = window.confirm("是否退出登录")
                if (var1 == true) {
                    //跳转界面
                    this.$router.push({path: '/login'});
                } else {
                    //关闭弹窗
                }
            },
        }
    };
</script>
