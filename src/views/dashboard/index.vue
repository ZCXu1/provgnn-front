<template>
<div>
  <el-divider style="margin-bottom:20px"></el-divider>
  <el-row>
    <div class="title">Threat Hunting Recommendation</div>
  </el-row>
<el-form ref="form" :model="form" label-width="150px">
<el-row>
 <el-form-item label="Search An Entity">
    <el-col :span="16">
    <el-input size="medium" v-model="form.name" placeholder="input the full name of the entity"></el-input>
    </el-col>
  </el-form-item>
</el-row>
<el-row>
  <el-form-item>
    <el-button @click="search();dialog1 = true" type="primary">Search</el-button>
  </el-form-item>
</el-row>

  <el-row>
    <el-form-item label="Subject Entity">
      <el-col :span="16">
        <el-input size="medium" v-model="form.name2" placeholder="input the full name of the entity"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="Object Entity">
      <el-col :span="16">
        <el-input size="medium" v-model="form.name3" placeholder="input the full name of the entity"></el-input>
      </el-col>
    </el-form-item>
  </el-row>
  <el-row>
    <el-form-item>
      <el-button @click="search2();dialog2 = true" type="primary">Search</el-button>
    </el-form-item>
  </el-row>
</el-form>
<el-dialog
 title="Similar Entities"
 :visible.sync="dialog1"
 width="90%"
>
<el-row>
<el-table
    :data="entitylist"
    stripe
    style="width: 100%">
    <el-table-column
      prop="NO"
      label="NUMBER"
      width="180">
    </el-table-column>
    <el-table-column
      prop="entityname"
      label="ENTITY NAME"
      width="500">
    </el-table-column>
  </el-table>
</el-row>
<span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialog1 = false">GOT IT</el-button>
</span>
</el-dialog>
  <el-dialog
    title="Result"
    :visible.sync="dialog2"
    width="90%"
  >
    <el-row>
      {{result}}
    </el-row>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialog2 = false">GOT IT</el-button>
</span>
  </el-dialog>
</div>

</template>

<script>
import { search, search2 } from '@/api/table'

export default {
  data() {
    return {
      form: {
        name: '',
        name2: '',
        name3: ''
      },
      entitylist: [],
      result: '',
      dialog1: false,
      dialog2: false
    }
  },
  methods: {
    search() {
      search({ entityName: this.form.name }).then(response => {
        this.entitylist = [{ NO: '1', entityname: response.data.first }, { NO: '2', entityname: response.data.second }, { NO: '3', entityname: response.data.third }]
      })
    },
    search2() {
      search2({ subject: this.form.name2, object: this.form.name3 }).then(response => {
        this.result = response.data.result
      })
    }
  }
}
</script>
<style lang="scss">
.text {
  font-size: 16px;
  text-align: center;
}
.title {
  font-size: 26px;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
</style>

