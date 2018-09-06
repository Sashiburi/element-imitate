/**
 * Created by zhuzijing on 2018/9/6.
 */
// 引入axios
import axios from 'axios'
// axios 配置
axios.defaults.timeout = 15000
axios.defaults.baseURL = 'http://localhost:8080'

// post提交设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default axios
