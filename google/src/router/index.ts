import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: "/my",
    name: "my",
    component: () => import("../components/Admin/my.vue")
  }
 
]

const router = new VueRouter({
  routes
})

export default router
