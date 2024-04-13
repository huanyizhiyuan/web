import { createApp } from "vue";
// import App from './聚类图尝试.vue'
import App from "./路由.vue";
import router from "./router/index.js";

// import App from './test1.vue'
// import App from './地图(主).vue'

const app = createApp(App);
app.use(router);
app.mount("#app");
