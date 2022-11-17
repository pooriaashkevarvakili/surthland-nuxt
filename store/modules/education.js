export const education = {
    namespaced: true,
    state: () => ({
        education: [
            {
                id: 1,
                name: 'education1'
            }
        ],
    }),
    getters: {

    },
    mutations: {
        delete(state, id) {
            state.education = state.education.filter(todo => todo.id != id)
        },
        addEducation(state, name) {
            state.education.push(name)
        },
    },
    actions: {
        addEducation({ commit }, name) {
            commit('addEducation', name)
        },
        delete({ commit }, id) {
            commit('delete', id)
        },
    }
}
export default education