import { defineStore } from "pinia";

export const useCredentialsStore = defineStore("credentials", {
    state: () => ({
        name: "",
        name2: "",
        scorePlayer: "",
        scoreClient: "",
        pngPlayer: "",
        pngClient: "",
    }),
});
