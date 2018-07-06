<template>
  <Layout>
    <!-- header -->
    <div slot="title">聚合分数汇总</div>
    <div slot="left">
      <router-link to="/" class="el-icon-back"></router-link>
    </div>
    <div slot="right"></div>

    <!-- content -->
    <div slot="content" class="container">
      <el-table
        :data="pushUrl"
        border
        style="width: 100%">
        <!--id-->
        <el-table-column label="ID" width="50" align="center">
          <template slot-scope="scope">{{scope.$index}}</template>
        </el-table-column>
        <!--姓名-->
        <el-table-column label="姓名" width="100" align="center">
          <template slot-scope="scope">{{scope.row[1][0].staff.name}}</template>
        </el-table-column>
        <!--性别-->
        <el-table-column label="性别" width="50" align="center">
          <template slot-scope="scope">{{scope.row[1][0].staff.sex}}</template>
        </el-table-column>
        <!--  智多星 PL -->
        <el-table-column label="PL">
          <el-table-column label="智多星" width="80">
            <template slot-scope="scope">{{contrast[0].PL.map[scope.row[1][4].score]}}
              <!-- <span>{{contrast.PL.map[0]}}</span> -->
            </template>
          </el-table-column>
        </el-table-column>
        <!--  外联者 RI -->
        <el-table-column label="RI" width="80">
          <el-table-column label="外联者" width="80">
            <template slot-scope="scope">{{contrast[0].RI.map[scope.row[1][5].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  协调者 CO -->
        <el-table-column label="CO" width="80">
          <el-table-column label="协调者" width="80">
            <template slot-scope="scope">{{contrast[0].CO.map[scope.row[1][1].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  鞭策者 SH -->
        <el-table-column label="SH" width="80">
          <el-table-column label="鞭策者" width="80">
            <template slot-scope="scope">{{contrast[0].SH.map[scope.row[1][6].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  监督者 ME -->
        <el-table-column label="ME" width="80">
          <el-table-column label="监督者" width="80">
            <template slot-scope="scope">{{contrast[0].ME.map[scope.row[1][3].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  凝聚者 TW -->
        <el-table-column label="TW" width="80">
          <el-table-column label="凝聚者" width="80">
            <template slot-scope="scope">{{contrast[0].TW.map[scope.row[1][8].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  实干者 IM -->
        <el-table-column label="IM" width="80">
          <el-table-column label="实干者" width="80">
            <template slot-scope="scope">{{contrast[0].IM.map[scope.row[1][2].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  善始善终者 CF -->
        <el-table-column label="CF" width="80">
          <el-table-column label="善始善终" width="80">
            <template slot-scope="scope">{{contrast[0].CF.map[scope.row[1][0].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  专家 SP -->
        <el-table-column label="SP" width="80">
          <el-table-column label="专家" width="80">
            <template slot-scope="scope">{{contrast[0].SP.map[scope.row[1][7].score]}}</template>
          </el-table-column>
        </el-table-column>
        <!--  最终结论  -->
        <el-table-column label="标签">
          <template slot-scope="scope">
            <span style="color:blue">{{scope.row[1]|toTag(contrast)}}</span>
            <!-- <el-tag v-html="value in scope.row[1]|toTag(contrast)" :key="value.id" size="small"></el-tag> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import AdminSideBar from '../components/AdminSideBar'
export default {
  name: 'Summary',
  components: {
    Layout,
    AdminSideBar
  },
  created () {
    this.getSummary()
  },
  data () {
    return {
      Aggregate: {},
      allUrl: [],
      pushUrl: [],
      contrast: [
        {
          PL: {
            tag: '智多星',
            tagOk: 64,
            map: [
              0,
              8,
              16,
              25,
              38,
              45,
              53,
              64,
              75,
              82,
              84,
              86,
              90,
              92,
              93,
              95,
              95,
              95,
              95,
              95,
              95
            ]
          },
          RI: {
            tag: '外联者',
            tagOk: 66,
            map: [
              0,
              3,
              7,
              16,
              23,
              32,
              38,
              49,
              64,
              72,
              71,
              77,
              83,
              86,
              90,
              95,
              95,
              95,
              96,
              95,
              95
            ]
          },
          CO: {
            tag: '协调者',
            tagOk: 64,
            map: [
              0,
              3,
              6,
              11,
              19,
              29,
              48,
              55,
              64,
              72,
              80,
              82,
              86,
              90,
              91,
              93,
              95,
              95,
              96,
              95,
              95
            ]
          },
          SH: {
            tag: '鞭策者',
            tagOk: 64,
            map: [
              0,
              1,
              4,
              6,
              12,
              18,
              23,
              30,
              36,
              45,
              50,
              55,
              64,
              71,
              75,
              79,
              83,
              86,
              87,
              89,
              92
            ]
          },
          ME: {
            tag: '监督者',
            tagOk: 61,
            map: [
              0,
              1,
              4,
              12,
              23,
              31,
              41,
              52,
              61,
              72,
              82,
              89,
              92,
              94,
              94,
              94,
              94,
              94,
              94,
              94,
              94
            ]
          },
          TW: {
            tag: '凝聚者',
            tagOk: 67,
            map: [
              0,
              1,
              6,
              12,
              19,
              27,
              37,
              49,
              60,
              67,
              74,
              79,
              83,
              89,
              94,
              95,
              95,
              95,
              95,
              95,
              95
            ]
          },
          IM: {
            tag: '实干者',
            tagOk: 68,
            map: [
              0,
              1,
              2,
              4,
              8,
              14,
              19,
              29,
              36,
              49,
              61,
              68,
              77,
              83,
              86,
              91,
              93,
              93,
              93,
              93,
              93
            ]
          },
          CF: {
            tag: '善始善终者',
            tagOk: 67,
            map: [
              0,
              11,
              18,
              31,
              41,
              51,
              56,
              67,
              72,
              78,
              83,
              85,
              89,
              93,
              93,
              93,
              93,
              93,
              93,
              93,
              93
            ]
          },
          SP: {
            tag: '善始善终者',
            tagOk: 69,
            map: [
              0,
              8,
              11,
              24,
              30,
              46,
              53,
              64,
              69,
              74,
              77,
              85,
              89,
              92,
              95,
              95,
              95,
              95,
              95,
              95,
              95
            ]
          }
        }
      ]
    }
  },
  filters: {
    toTag (val, info) {
      let labels = ''
      for (let i in val) {
        // console.log(val[i].code)
        // console.log(parseInt(val[i].score))
        // console.log(info[0][val[i].code].map[val[i].score])
        // console.log(info[0])
        // console.log(info[0][val[i].code].tagOk)
        if (info[0][val[i].code].map[val[i].score] > info[0][val[i].code].tagOk) {
          // labels.push(info[0][val[i].code].tag)
          labels += info[0][val[i].code].tag + '  、'
        }
      }
      // console.log(labels)
      return labels.slice(0, -1)
    }
  },
  methods: {
    // todo: 获取聚合分数(需登录)
    getSummary () {
      this.$api.get('survey/summary', null, result => {
        // console.log(result.data)
        const map = new Map()
        result.data.forEach(element => {
          map.set(element.staff_id, [])
          // map.get(element.staff_id.answer).push({ code: element.code, score:element.score });
        })
        result.data.forEach(element => {
          map.get(element.staff_id).push({
            staff: element.staff,
            code: element.code,
            score: element.score,
            survey: element.survey
          })
        })
        // console.log(map)
        for (var [key, val] of map.entries()) {
          this.allUrl.push([key, val])
        }
        // console.log(this.allUrl)

        this.allUrl.forEach(element => {
          if (element[1].length === 9) {
            this.pushUrl.push(element)
          }
        })
        console.log(this.pushUrl)
      })
    }
  }
}
</script>

<style scoped lang="less">
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
  .el-table {
    background: #fff;
  }
  .el-icon-back {
    padding: 0 15px;
  }
</style>
