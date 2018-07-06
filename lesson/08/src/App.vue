<template>
  <div id="app">
    <el-card>
        <div class="mar-btm-10 clearfix">
            <el-button
                type="primary"
                size="small"
            >
                <i class="fa fa-plus-circle"></i> 添加item
            </el-button>
            <div class="search-area">
                <el-input placeholder="输入item名称查询"></el-input>
                <el-button size="small">
                <i class="fa fa-fw fa-search">搜索</i>
                </el-button>
            </div>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
