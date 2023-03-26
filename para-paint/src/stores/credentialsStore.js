import { defineStore } from "pinia";

export const useCredentialsStore = defineStore("credentials", {
    state: () => ({
        name: "",
    }),
    // getters: {
    //     doubleCount: (state) => state.count * 2,
    // },
    // setters: {
    //     setName: (state, name) => (state.name = name),
    // },
    // actions: {
    //     // init(): (state) => (state.name = ""),
    //     setName: (state, name) => (state.name = name),
    // },
});
