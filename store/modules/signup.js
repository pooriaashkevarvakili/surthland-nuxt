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
        async getUsers({ commit }, item) {
            try {
                console.log(item);
                const { phone = "", password, email, password_confirmation } = item.data
                const httpResponse = await this.$axios.post("api/auth/register", {
                    phone,
                    password,
                    email,
                    password_confirmation
                });
                const { token } = httpResponse.data
                localStorage.setItem("token", token);

            } catch (error) {
                alert(error)
                console.log(error)
            }
        }

    }

}


export default signup