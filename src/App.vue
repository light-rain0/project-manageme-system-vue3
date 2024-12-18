<script setup>
import {storeToRefs} from "pinia";

import {useProjectInfoStore} from '@/store/projectInfo.js'

const projectInfoStore = useProjectInfoStore()

// 解构属性
const {projectAll} = storeToRefs(projectInfoStore)
// 解构方法
// console.log(projectAll)

// 加载初始页面
projectInfoStore.getList()

</script>

<template>
  <div>
    <table v-if="projectAll.length > 0">
      <thead>
      <tr>
        <th>全选</th>
        <th>项目编号</th>
        <th>项目名称</th>
        <th>开始日期</th>
        <th>结束日期</th>
        <th>项目负责人</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,i) in projectAll" :key="item.id">
        <td><input type="checkbox" name="" id=""></td>
        <td>{{ i + 1 }}</td>
        <td>{{ item.prjName }}</td>
        <td>{{ item.prjStartDate }}</td>
        <td>{{ item.prjEndDate }}</td>
        <td>{{ item.prjManager }}</td>
        <!--        <td><a @click.prevent="projectInfoStore.del(item.id)" href="">删除</a></td>-->
        <td><a @click.prevent="projectInfoStore.del(item.id)" href="#">删除</a></td>
      </tr>
      </tbody>
    </table>


    <table v-else>
      <tbody>
      <tr>
        <td>暂无数据</td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<style scoped>

tr, th, td {
  text-align: center;
  border: 1px solid #ccc;
  border-collapse: collapse;
  padding: 12px;
}

</style>
