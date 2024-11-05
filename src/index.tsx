import { createRoot } from "react-dom/client";
import App from "./components/app";
import axios from 'axios';
import { API_SERVER_URL } from "./public-config";

const container = document.getElementById("app");
const root = createRoot(container);

async function fetchData() {
    try {
        // Wait for the API response before proceeding
        const response = await axios.get(`${API_SERVER_URL}/contests`);
        if (response.data && response.data.contests) {
            console.log("LAAA ", response.data.contests);
            root.render(<App initialData={{ contests: response.data.contests }} />);
        } else {
            console.warn("Contests data not found in response:");
        }
    } catch (error) {
        console.error("Error fetching contests:", error);
    }
}

// Call fetchData to initiate the process
fetchData();
