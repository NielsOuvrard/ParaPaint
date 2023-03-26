<script setup>
import { ref, onMounted } from "vue";
import router from "@/router/router";
// import axios from "axios";

const bestScore = ref(null);

onMounted(async () => {
    bestScore.value = await sendDataToServer();
});

function redirectRandom() {
    router.go("/");
}

async function sendDataToServer() {
    // try {
    //     const response = await axios.post(
    //         "http://82.66.173.132/?api=parapaint",
    //         { best_users: 10 }
    //     );
    //     console.log("Data sent successfully:", response.data);
    // } catch (error) {
    //     console.error("Error sending data:", error);
    // }
    var formData = new FormData();
    formData.append("best_users", 10);
    let value = null;
    try {
        const response = await fetch("http://82.66.173.132/?api=parapaint", {
            method: "POST",
            body: formData,
        });
        value = await response.json();
        console.log("Data sent successfully:", value);
    } catch (error) {
        console.error("Error sending data:", error);
    }
    return value;
}
</script>
<template>
    <div>
        <h1>About</h1>
        <p>Welcome to the about page!</p>
        <div v-if="bestScore !== null">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pseudo</th>
                        <th>Opponent</th>
                        <th>Score</th>
                        <th>Opponent's score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in bestScore" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.pseudo }}</td>
                        <td>{{ item.against }}</td>
                        <td>{{ item.score }}</td>
                        <td>{{ item.score_ennemy }}</td>
                        <td>{{ item.created_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="redirectRandom">redirectRandom</button>
    </div>
</template>

<style scoped lang="scss">
h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

thead tr {
    background-color: #c3c3c3;
    color: #fff;
    text-align: left;
}

th,
td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: #f5f5f5;
}

tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
