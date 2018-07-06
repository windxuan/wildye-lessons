<template>
  <el-dialog
    title="生成问卷数量"
    width="400px"
    :visible.sync="$store.state.showDialogCode">
    <el-form :inline="true">
      <el-form-item>
        <el-input-number v-model="codeSum" :min="1" :max="999"></el-input-number>
        <el-button @click="createCode" type="success">一键生成</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="urlCodes"
      max-height="375"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        label="问卷码">
        <template slot-scope="scope">
          <el-input v-model="scope.row">
            <el-button
              slot="append"
              icon="el-icon-document"
              v-clipboard:copy="scope.row"
              v-clipboard:success="onCopy">
            </el-button>
          </el-input>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
export default {
  name: 'DialogUrlCode',
  data () {
    return {
      codeSum: 1,
      urlCodes: []
    }
  },
  methods: {
    onCopy () {
      console.log('copy success')
      this.$message({
        message: '复制成功',
        type: 'success'
      })
    },
    toggleDialogCode () {
      this.urlCodes = null
      this.$store.commit('toggleDialogCode')
    },
    // todo: 发送生成URL请求
    createCode () {
      this.$store.commit('setCodeNum', this.codeSum)
      this.$api.get('url/generate', {survey_id: this.$store.state.codeInfo.survey_id, num: this.$store.state.codeInfo.num}, result => {
        this.urlCodes = result.data.map(function (val) {
          return val.substr(10)
        })
      }, error => {
        if (error.status === 422) {
          console.log('survey_id 参数错误')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
