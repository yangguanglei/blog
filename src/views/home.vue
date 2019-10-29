<style scoped lang="less">
  #home-head {
    position: relative;
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
    height: 60px;
    width: 125px;
    display: inline-block;
    padding: 2px;
    margin-right: 10px;
  }

  #head-right {
    display: inline-block;
    float: right;
    margin: 14px 0px;
  }

  #head-menu {
    display: inline-block;
  }

  #logo-img {
    float: left;
    display: block;
    background-image: url("../assets/logo.png");
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  #login-ico {
    width: 120px;
    float: right;
    margin-left: 20px;
  }

  #select-project {
    float: right;
    width: 160px;
  }

  #logo-img {
    display: inline-block;
  }

  #home-content {
    position: fixed;
    top: 65px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
  }
  #user-dropdown{
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
          <router-link to="/index" tag="li">统计分析-总览</router-link>
        </MenuItem>
        <Submenu name="2">
          <template slot="title">
            系统管理
          </template>
          <div>
            <MenuItem name="2-1">
              <router-link to="" tag="li">项目信息管理</router-link>
            </MenuItem>
            <MenuItem name="2-2">
              <router-link to="" tag="li">用户信息管理</router-link>
            </MenuItem>
            <MenuItem name="2-3">
              <router-link to="" tag="li">采集信息管理</router-link>
            </MenuItem>
            <MenuItem name="2-4">
              <router-link to="" tag="li">设备信息管理</router-link>
            </MenuItem>
          </div>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            监控
          </template>
          <div>
            <MenuItem name="3-1">
              <router-link to="" tag="li">整体运行监控</router-link>
            </MenuItem>
            <MenuItem name="3-2">
              <router-link to="" tag="li">异常报警监控</router-link>
            </MenuItem>
            <MenuItem name="3-3">
              <router-link to="" tag="li">关键设备运行监控</router-link>
            </MenuItem>
            <MenuItem name="3-4">
              <router-link to="" tag="li">传输\存储状态监控</router-link>
            </MenuItem>
          </div>
        </Submenu>
      </Menu>
      <div id="head-right">
        <div id="login-ico">
          <Dropdown trigger="click" style="margin-left: 20px">
            <Avatar icon="ios-person"></Avatar>
            <a style="color: black;" onmouseover="this.style.color = '#2d8cf0'"
               onmouseout="this.style.color = 'black'">
              {{user_name}}
            </a>
            <Dropdown-menu slot="list" id="user-dropdown">
              <Dropdown-item @click.native="logout()">
                <span>注销</span>
              </Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <Row id="select-project">
          <Select v-model="model1" placeholder="项目选择" style="width: 150px">
            <Option v-for="item in projectSelect" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Row>
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
