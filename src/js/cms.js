import request from '@/utils/request'

const baseApi = process.env.VUE_APP_BASE_API;

export function addAccount() {
  return request({
    url: baseApi + `/api/app/online?type=1`,
    method: 'GET'
  });
}
