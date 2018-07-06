<template>
  <Layout>
    <!-- header -->
    <div slot="title">{{surveyInfo.name}}</div>
    <div slot="left">
      <router-link to="/" class="el-icon-back"></router-link>
    </div>
    <div slot="right"><DialogHint :itemCount="2"/></div>

    <!-- content -->
    <div slot="content" class="container">
      <el-row :gutter="10">
        <!-- item -->
        <el-col :span="24" :sm="16">
          <el-collapse
            v-for="val in surveyInfo.questions" :key="val.id"
            v-model="activeName"
            accordion>
            <!-- <span>{{all[val.id]}}</span> -->
            <el-collapse-item
              :title="'[ ' + val.options[0].id + ' ~ ' + val.options[val.options.length - 1].id + ' ] ' + val.question"
              :name="val.id">
              <div class="block" v-for="option in val.options" :key="option.id">
                <span class="demonstration">{{option.id + '. ' + option.text}}</span>
                <el-slider
                  v-model="grade1[option.id - 1]"
                  style="margin-left: 30px"
                  :step="1"
                  :max="10"
                  @change="grade"
                  show-stops>
                </el-slider>
                <span class="spn1">{{grade1[option.id - 1]}}</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <!-- from -->
        <el-col :span="24" :sm="8">
          <FormStaff/>
        </el-col>
      </el-row>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import DialogHint from '../components/DialogHint'
import FormStaff from '../components/FormStaff'
export default {
  name: 'index',
  components: {
    Layout,
    DialogHint,
    FormStaff
  },
  data () {
    return {
      activeName: '1',
      surveyInfo: {},
      grade1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      total1: 0,
      total2: 0
      // all: [this.total1, this.total2]
    }
  },
  created () {
    this.getSrvey()
  },
  methods: {
    // todo: 获取问卷(需先生成URL)
    getSrvey () {
      // 发送请求问卷信息(传入生成的URL)
      this.$api.get('survey/url' + this.$store.state.surveyCode, null, result => {
        console.log(result.data)
        this.surveyInfo = result.data
      })
    },
    grade () {
      const a = this.grade1.slice(0, 9)
      this.total1 = 0
      a.forEach(element => {
        this.total1 += element
      })
      this.$store.state.total1 = a
      // console.log(this.total1)
      const b = this.grade1.slice(9, 15)
      this.total2 = 0
      b.forEach(element => {
        this.total2 += element
      })
      // console.log(this.total2)
      this.$store.state.total2 = b
    }
  }
}
</script>

<style lang="less">
  .container {
    padding: 15px;
    width: 100%;
    @media (min-width: 480px) {
      margin: 0 auto;
      padding: 15px;
      min-width: 480px;
    }
    box-sizing: border-box;
  }
  .el-collapse {
    margin-bottom: 10px;
    padding: 0 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
  }
  .el-icon-back {
    padding: 0 .15rem;
  }
  .el-slider__runway{
    width: 80%;
  }
  .block{
    position: relative;
  }
  .spn1{
    position: absolute;
    bottom: 10px;
    left: 85%;
  }
</style>
