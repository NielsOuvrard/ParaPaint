import { defineStore } from "pinia";

export const useCredentialsStore = defineStore("credentials", {
    state: () => ({
        name: "",
        name2: "",
        scorePlayer: "",
        scoreClient: "",
        pngPlayer: "",
        pngClient: ""
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
