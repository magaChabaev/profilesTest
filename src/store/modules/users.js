import { fetchProfiles } from "../../api/fetchApi";

const usersStore = {
  namespaced: true,
  state: {
    users: {},
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {
    ADD_USERS(state, usersList) {
      state.users = usersList;
    },
  },
  actions: {
    setUsers({ commit }) {
      return fetchProfiles().then((data) => commit("ADD_USERS", data));
    },
  },
};

export default usersStore;
