<template>
  <div v-if="!$store.state.isWebApp">
    <router-link v-if="!$store.state.loginStatus" to="/login">登录</router-link>
    <span v-if="$store.state.loginStatus"><span class="user">欢迎，{{ this.$store.state.userInfo.username }}</span><a @click="logout">退出</a></span>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  methods: {
    logout: function () {
      this.$api.delete('logout', null)
      this.$store.commit('setUserInfo', '')
      this.$store.commit('setLoginStatus', false)
      localStorage.setItem('info', '')
    }
  }
}
</script>

<style scoped>
  div {
    display: inline-block;
    font-size: 14px;
    padding: 0 .15rem;
  }
  .user {
    display: inline-block;
    padding: 0 15px;
  }
</style>
