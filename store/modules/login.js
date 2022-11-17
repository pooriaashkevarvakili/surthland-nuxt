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
        async loginGet({ commit }, item) {
            try {
                console.log(item);
                const { password = "12345678", phone = "09376720694" } = item
                const httpResponse = await this.$axios.post("api/auth/login", {
                    phone,
                    password,

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
export default login