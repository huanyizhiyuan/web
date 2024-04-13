import { createRouter, createWebHashHistory } from "vue-router";
import Map from "../views/地图(主).vue";
import Cluster_diagram from "../views/聚类图尝试.vue";
import Home from "../views/home.vue";
import MathAchieve from "../views/数学成就总体.vue";
import MathAchieve2 from "../views/数学成就总体2.vue";
import MathAchieveArithmetic from "../views/数学成就——算术.vue";

const router = createRouter({
  history: createWebHashHistory(),
  //routes是真的重要，就是它实现网页跳转
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Map",
      component: Map,
    },
    {
      path: "/Cluster_diagram",
      component: Cluster_diagram,
    },
    {
      path: "/MathAchieve",
      component: MathAchieve,
    },
    {
      path: "/MathAchieve2",
      component: MathAchieve2,
    },
    {
      path: "/MathAchieveArithmetic",
      component: MathAchieveArithmetic,
    },
  ],
});

export default router;
