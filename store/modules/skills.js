const skills = {
    namespaced: true,
    state: () => ({
        skills: [
            {
                id: 1,
                name: 'skills1'
            }
        ]
    }),
    getters: {},
    mutations: {
        deleteSkills(state, id) {
            state.skills = state.skills.filter(todo => todo.id != id)

        },
    },
    actions: {
        deleteSkills({ commit }, id) {
            commit('deleteSkills', id)
        },
    }
}
export default skills