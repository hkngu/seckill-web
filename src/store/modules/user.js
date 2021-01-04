import { login  } from '@/api/login'

const user = {
  state: {
    customerName: ''
  },

  mutations: {
    SET_NAME: (state , name) => {
      state.customerName = name
    }
  },
  actions: {
    //获取用户信息
    GetUserInfo({ commit , state },form){
      return new Promise((resolve, reject) => {
        login(form.username,form.password).then(response => {
          const data = response.data;
          commit('SET_NAME',data.customerName);
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      })
    }
  }
}
export default user;
