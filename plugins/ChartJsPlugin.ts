import {
    Chart as ChratJs,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    ArcElement,
} from "chart.js";

export default defineNuxtPlugin((nuxtApp) => {
    ChratJs.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
        LineElement,
        ArcElement
    );
})