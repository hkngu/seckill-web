import { login  } from '@/api/login'
import md5 from 'js-md5';

const PASSWORD_SALT = "asd1fg";

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
        const str = form.password + PASSWORD_SALT;
          login(form.username, md5(str)).then(response => {
            const data = response.data;
            commit('SET_NAME', data.customerName);
            resolve(response);
          }).catch(error => {
            reject(error);
          });
      })
    }

  }
}

export default user;
