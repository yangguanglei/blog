<style scoped>
    .login {
        width: 100%;
        height: 100%
    }

    #login-window {
        height: 300px;
        margin-top: 10%;
        margin-left: 42%;
    }

    #login-title {
        margin-left: 115px;
        font-size: 1.3em;
    }

    #userinfo-account, #userinfo-password, #login-title, #userinfo-key, #userinfo-permission {
        height: 50px;
    }

    .error-note-show {
        display: inline-block !important;
    }
</style>

<template>
    <div class="login">
        <div id="login-window">
            <div id="login-title">
                <span>{{loginText}}</span>
            </div>
            <div id="userinfo">
                <div id="userinfo-account">
                    <Input v-model="account" placeholder="用户名" style="width: 300px" prefix="xxx iconfont icon-user"/>
                </div>
                <div id="userinfo-password">
                    <Input v-model="password" placeholder="密码" style="width: 300px;"
                           prefix="xxx iconfont icon-password"/>
                </div>
                <div id="userinfo-key">
                    <Input v-model="value" placeholder="验证码" style="width: 198px;"/>
                    <Button type="success" long style="width: 100px">获取验证码</Button>
                </div>
                <div id="userinfo-permission">
                    <Checkbox v-model="single">记住用户名和密码</Checkbox>
                </div>
                <div>
                    <Button type="success" long style="width: 300px" @click="doLogin()">登录</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "login",
        data: function () {
            return {
                loginText: '用户登录',
                account: '',
                password: '',
                value: '',
                single: false
            };
        },
        methods: {
            doLogin: function () {
                $('#userinfo .error-note').removeClass('error-note-show');
                var user = {};
                user.account = this.account;
                user.password = this.password;
                if (user.account === "admin" && user.password === "1234")
                    this.$router.push({path: '/'});
                if (user.account !== "admin" && user.password === "1234")
                    $('#userinfo-account>.error-note').addClass('error-note-show');
                if (user.account === "admin" && user.password !== "1234")
                    $('#userinfo-password>.error-note').addClass('error-note-show');
                if (user.account !== "admin" && user.password !== "1234") {
                    $('#userinfo-account>.error-note').addClass('error-note-show');
                    $('#userinfo-password>.error-note').addClass('error-note-show')
                }
            },
        },
    };
</script>

