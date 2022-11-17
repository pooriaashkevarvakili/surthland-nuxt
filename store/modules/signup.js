const signup = {
    namespaced: true,
    state: () => ({
        usersSignUp: []

    }),
    getters: {
        usersSignUp: state => state.usersSignUp
    },
    mutations: {
        users_Sign_Up(state, usersSignUp) {
            state.usersSignUp = usersSignUp
        }
    },
    actions: {
        getUsers({ commit }) {

            this.$axios.post('api/auth/register', {
                phone: '',
                password: '',
                email: '',
                password_confirmation: '',


            }).then(res => {

                res.data
                res.data.phone
                res.data.password
                res.data.email
                res.data.password_confirmation

                commit('users_Sign_Up')

                localStorage.setItem('token', res.data)
            }).catch(error => {

                alert(error)
                console.log(error)
            })
        }

    }

}
export default signup