<template>
  <div>
    <div class="container pad_t150">
      <div class="row">
        <div class="col-md-6 center-block">
          <div class="panel hover_sh clearfix">
            <div class="panel_tit">
              <h4>登录</h4>
            </div>
            <form class="panel_body panel_form center-block" method="post" @submit.prevent="">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="iconfont icon-account addon_icon"></i>
                </span>
                <input type="text" v-model="user.email" class="form-control" placeholder="邮箱账号">
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="iconfont icon-lock addon_icon"></i>
                </span>
                <input type="password" v-model="user.password" class="form-control" placeholder="密码 ">
              </div>
              <div class="panel_form_btn">
                <button type="submit" class="btn btn-success">登 录</button>
              </div>
              <p class="text-right">
                <router-link to="/reg">立即注册</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>
.panel_form{
    width: 66.66667%;
    padding: 50px 20px;
}

.panel_form .input-group{
    margin-bottom: 20px;
}
.panel_form_btn{
    margin-bottom: 10px;
}
.panel_form_btn button{
    width:100%
}
.panel_form_sex{
    margin-bottom: 20px;
}
.panel_form_sex a{
    display: inline-block;
    color:#fff;
    font-size: 28px;
    line-height: 28px;
    height: 42px;
    padding: 7px;
    margin: 0 20px;
    -webkit-transition: background .5s ease;
    transition: background .5s ease;
}
.sex_nan{
    background: #59bfff;
    border-radius: 50%;
}
.sex_nv{
    background: #ff5b7e;
    border-radius: 50%;
}
.sex_nan:hover{
    background: #59bfff;
}
.sex_nv:hover{
    background: #ff5b7e;
}
.sex_def{
    background:#ccc;
}
</style>
