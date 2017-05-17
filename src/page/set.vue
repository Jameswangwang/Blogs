<template>
    <div>
        <div class="container pad_t75">
            <div class="row">
                <div class="col-md-3">
                    <div class="panel_s">
                        <h5>个人设置</h5>
                        <div>
                            <router-link to="/set" class="set_a" active-class="set_active" exact>我的信息</router-link>
                            <router-link to="/set/password" class="set_a" active-class="set_active">修改密码</router-link>
                            <router-link to="/set/friend" class="set_a" active-class="set_active">我的小伙伴</router-link>
                        </div>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
.set_a {
    position: relative;
    display: block;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
}

.set_a:last-child {
    border-bottom: 0;
}

.set_active:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    background-color: #59bfff;
}

.set_form {
    margin-bottom: 15px;
}

.set_form>.tit {
    float: left;
    width: 70px;
    height: 34px;
    line-height: 34px;
    text-align: right;
    font-weight: bold;
}

.set_form>.inp {
    float: left;
    margin-left: 20px;
    line-height: 34px;
    color: #333;
}

.set_form>.checkbox {
    float: left;
    margin-left: 20px;
    margin-top: 7px;
    margin-bottom: 7px;
}

.set_form>.radio {
    float: left;
    margin-left: 20px;
    margin-top: 7px;
    margin-bottom: 7px;
}

.set_select {
    display: inline-block;
    width: 80px;
}

.set_form textarea {
    width: 196px;
}

.set_sub {
    padding-left: 90px;
}

.set_header {
    width: 200px;
}

.set_header>.tit {
    line-height: 34px;
    font-weight: bold;
}

.set_header img {
    border-radius: 3px;
    margin-bottom: 15px;
}
</style>
