const login = {
    namespaced: true,
    state: () => ({
        login: []
    }),
    getters: {
        login: state => state.login
    },
    mutations: {
        login(state, login) {
            state.login = login
        }
    },
    actions: {
        loginGet({commit}) {
            this.$axios.post('api/auth/login', {
                password: "",
                phone: ""
            }).then(res => {
                res.data
                console.log(res.data);
                commit('login')
            }).catch(error => {
                alert(error)
                console.log(error)
            })
        }
    }
}
export default login