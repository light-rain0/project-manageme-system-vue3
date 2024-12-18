import axios from "axios";
import {ref} from "vue";
import {defineStore} from "pinia";

export const useProjectInfoStore
    = defineStore('projectInfo', () => {

        const projectAll = ref([])

        // 获取总数据
        const getList = async () => {
            const res = await axios.get("http://localhost:8080/test/selectAll")
            // console.log(res.data)
            projectAll.value = res.data
            // console.log(projectAll.value)
        }

        // 删除单行数据
        const del = async (id) => {
            const res = await axios.delete(`http://localhost:8080/test/delete/${id}`);
            return res.data;
        }

        return {
            getList,
            projectAll
        }
    }
)

