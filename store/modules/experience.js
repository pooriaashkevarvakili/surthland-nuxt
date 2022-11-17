const experience = {
    namespaced: true,
    state: () => ({
        experience: [
            {
                id: 1,
                name: 'experience1'
            }
        ],
    }),
    getters: {

    },
    mutations: {
        deleteExperience(state, id) {
            state.experience = state.experience.filter(todo => todo.id != id)
        },
        addExperience(state, name) {
            state.experience.push(name)
        }
    },
    actions: {
        deleteExperience({ commit }, id) {
            commit('deleteExperience', id)
        },
        addExperience({ commit }, name) {
            commit('addExperience', name)
        }
    }
}
export default experience