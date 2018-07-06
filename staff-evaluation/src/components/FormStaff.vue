<template>
  <el-form
    label-position="left"
    label-width="60px"
    ref="staff"
    :model="staff"
    :rules="rules">
    <el-form-item label="工号:" prop="staff_no">
      <el-input
        type="text"
        prepend="prepend"
        v-model="staff.staff_no"
        clearable/>
    </el-form-item>
    <el-form-item label="姓名:" prop="name">
      <el-input
        type="text"
        prepend="prepend"
        v-model="staff.name"
        clearable/>
    </el-form-item>
    <el-form-item label="性别:">
      <el-radio v-model="staff.sex" label="男">男</el-radio>
      <el-radio v-model="staff.sex" label="女">女</el-radio>
    </el-form-item>
    <el-button type="primary" @click="submitForm('staff')">提交问卷</el-button>
    <el-button @click="resetForm('staff')">重置</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'FormStaff',
  props: ['msg'],
  created () {
    console.log(this.msg)
  },
  data () {
    return {
      radio: '1',
      aNums: 0,
      bNums: 0,
      staff: {
        name: '',
        sex: '男',
        staff_no: ''
      },
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        staff_no: [
          { required: true, message: '工号不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { type: 'number', message: '必须为数字值' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      console.log(this.$store.state.total1)
      console.log(this.$store.state.total2)
      const a = this.$store.state.total1
      const b = this.$store.state.total2
      const uName = this.staff.name
      const uSex = this.staff.sex
      const uStaff = this.staff.staff_no
      // console.log(a, b, uName, uStaff, uSex)
      this.aNums = 0
      a.forEach(element => {
        this.aNums += element
      })
      this.bNums = 0
      b.forEach(element => {
        this.bNums += element
      })
      console.log(this.bNums)
      if (this.aNums === 10 && this.bNums === 10) {
        console.log(123)
        this.$api.post('survey', {
          'staff': {
            'name': uName,
            'sex': uSex,
            'staff_no': uStaff
          },
          'questions': [
            {
              'id': 1,
              'options': [
                {
                  'id': 1,
                  'code': 'PL',
                  'score': a[0]
                },
                {
                  'id': 2,
                  'code': 'RI',
                  'score': a[1]
                },
                {
                  'id': 3,
                  'code': 'CO',
                  'score': a[2]
                },
                {
                  'id': 4,
                  'code': 'SH',
                  'score': a[3]
                },
                {
                  'id': 5,
                  'code': 'ME',
                  'score': a[4]
                },
                {
                  'id': 6,
                  'code': 'TW',
                  'score': a[5]
                },
                {
                  'id': 7,
                  'code': 'IM',
                  'score': a[6]
                },
                {
                  'id': 8,
                  'code': 'CF',
                  'score': a[7]
                },
                {
                  'id': 9,
                  'code': 'SP',
                  'score': a[8]
                }
              ]
            },
            {
              'id': 2,
              'options': [
                {
                  'id': 1,
                  'code': 'PL',
                  'score': b[0]
                },
                {
                  'id': 2,
                  'code': 'RI',
                  'score': b[1]
                },
                {
                  'id': 3,
                  'code': 'CO',
                  'score': b[2]
                },
                {
                  'id': 4,
                  'code': 'SH',
                  'score': b[3]
                },
                {
                  'id': 5,
                  'code': 'ME',
                  'score': b[4]
                }
              ]
            }
          ],
          'noncestr': 'url' + this.$store.state.surveyCode
        }, result => {
          console.log(result.data)
        })
        this.$router.push('/end')
      } else {
        this.$alert('该部分所分配的分数不符合要求，请重新分配', {
          center: true
        })
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .el-form {
    padding: 15px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
  }
  .el-button {
    margin: 0;
    width: 49%;
  }
</style>
