import request from '../utils/request';
import qs from 'qs';

export async function fetchInit(params: any) {
	return request('User/getUserList', {
		method: 'post',
		body: JSON.stringify(params)
	});
}

export async function getUserList2(params: any) {
	return request(`User/getUserList2?${qs.stringify(params)}`);
}
