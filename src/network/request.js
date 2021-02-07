import axios from "axios";
import {Toast} from "vant";
import Loading from "../store/index";

export function request(config) {
	// 创建实例
	const instance1 = axios.create({
		baseURL: 'http://152.136.185.210:7878/api/m5',
		timeout: 5000
	})

	// 拦截器
	// 请求拦截
	instance1.interceptors.request.use(config => {
		// 当getters里面的isLoading为true再显示请求加载
		if (Loading.getters.isLoading) {
			Toast.loading({
				forbidClick: true,
				message: '加载中...'
			})
		}
		return config
	}, err => {
		console.log(err);
	})

	// 响应拦截
	instance1.interceptors.response.use(res => {
		Toast.clear()
		return res.data
	}, err => {
		Toast.clear()
		console.log(err);
	})

	// 发送请求
	return instance1(config)
}
