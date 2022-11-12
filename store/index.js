import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const state = () => ({
    education: [
        {
            id: 1,
            name: 'education1'
        }
    ],
    experience: [
        {
            id: 1,
            name: 'experience1'
        }
    ],
    skills: [
        {
            id: 1,
            name: 'skills1'
        }
    ]
})
export const getters = {

}
export const mutations = {
    delete(state, id) {
        state.education = state.education.filter(todo => todo.id != id)
    },
    deleteExperience(state, id) {
        state.experience = state.experience.filter(todo => todo.id != id)
    },
    deleteSkills(state, id) {
        state.skills = state.skills.filter(todo => todo.id != id)

    }
}
export const actions = {
    delete({ commit }, id) {
        commit('delete', id)
    },
    deleteExperience({ commit }, id) {
        commit('deleteExperience', id)
    },
    deleteSkills({ commit }, id) {
        commit('deleteSkills', id)
    }
}