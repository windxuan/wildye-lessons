<template>
  <el-table
    :data="data"
    :row-key="getRowKeys"
    :expand-row-keys="expands"
    index="id"
    @row-click="rowClick"
    @expand-change="expandChange">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form
          label-position="left"
          class="table-expand"
          inline>
          <el-form-item label="问卷 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="问卷名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="评测方向">
            <span>{{ props.row.show }}</span>
          </el-form-item>
          <el-form-item label="描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="发布时间">
            <span>{{ props.row.created_at }}</span>
          </el-form-item>
          <el-form-item label="更新时间">
            <span>{{ props.row.updated_at }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="问卷 ID"
      prop="id"
      width="100"
      align="center"
      sortable>
    </el-table-column>
    <el-table-column
      label="问卷名称"
      prop="name"
      align="center">
    </el-table-column>
    <el-table-column
      label="发布时间"
      prop="created_at"
      width="170"
      align="center"
      sortable>
    </el-table-column>
    <el-table-column
      label="操作"
      fixed="right"
      min-width="105"
      align="center">
      <template slot-scope="scope">
        <el-button
          v-if="!$store.state.loginStatus"
          @click.stop="$emit('toSurvey', scope.row.id)"
          size="mini"
          plain>开始答卷
        </el-button>
        <el-button-group v-if="$store.state.loginStatus">
          <el-button
            @click.stop="$emit('toGetSum', scope.row.id)"
            size="mini"
            plain>生成问卷码
          </el-button>
          <el-button
            @click.stop="$emit('toSummary', scope.row.id)"
            size="mini"
            plain>查看汇总
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'surveyTable',
  props: ['data'],
  data () {
    return {
      rowKey: 0,
      expands: [],
      tableUrlStr: false
    }
  },
  methods: {
    // :todo 获取所在行 id
    getRowKeys (row) {
      return row.id
    },
    // :todo 单击展开行
    rowClick (row) {
      this.rowKey = row.id
      if (row.id === this.expands[0]) {
        this.expands = []
      } else {
        this.expands = []
        this.expands.push(row.id)
      }
    },
    // :todo 单行展开
    expandChange (row, expandedRows) {
      if (expandedRows.length > 1) {
        expandedRows.shift()
      }
    }
  }
}
</script>

<style lang="less">
  .table-expand {
    font-size: 0;
    label {
      width: 90px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
  .el-table {
    width: 100%;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
  }
  .el-table__fixed-right {
    z-index: 0 !important;
  }
</style>
