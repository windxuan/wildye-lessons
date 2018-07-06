<template>
  <Layout>
    <span slot="title">问卷列表</span>
    <span slot="right"><User/></span>
    <div slot="content" class="container">

      <CardList
        v-if="$store.state.isWebApp"
        :data="surveyList"/>

      <TableList
        v-if="!$store.state.isWebApp"
        :data="surveyList"
        @toSurvey="goSurvey"
        @toGetSum="setGetSum"
        @toSummary="goSummary"/>

      <DialogCode/>

    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import User from '../components/User'
import CardList from '../components/CardList'
import TableList from '../components/TableList'
import DialogCode from '../components/DialogCode'
export default {
  name: 'index',
  components: {
    Layout,
    User,
    CardList,
    TableList,
    DialogCode
  },
  data () {
    return {
      urlStr: [],
      surveyList: [],
      URL: []
    }
  },
  created () {
    this.getSurveyList()
  },
  methods: {
    // todo: 获取列表
    getSurveyList () {
      this.$api.get('survey', null, result => {
        this.surveyList = result.data.data
      })
    },
    // todo: 填写问卷地址
    goSurvey () {
      this.$prompt('请输入问卷码', '', {
        inputPattern: /^[0-9]+[-]+[a-zA-Z0-9]{10}$/,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$store.commit('setSurveyCode', value)
        this.$router.push('/survey/answer')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    },
    setGetSum (id) {
      this.$store.commit('setCodeId', id)
      this.$store.commit('toggleDialogCode')
    },
    goSummary (id) {
      this.$router.push('/summary?survey_id=' + id)
    }
  }
}
</script>

<style lang="less">
  .container {
    width: 100%;
    padding: 10px 10px 0;
    box-sizing: border-box;
    @media (min-width: 960px) {
      margin: 0 auto;
      width: 960px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
  }
</style>
