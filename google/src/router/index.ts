import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: "/my",
    name: "my",
    component: () => import("../components/Admin/my.vue")
  },
  {
    path: "/curriculum",
    name: "curriculum",
    component: () => import("../components/Teacher/curriculum.vue")
  },
  {
    path: "/data",
    name: "data",
    component: () => import("../components/Admin/data.vue")
  },
  {
    path: "/change",
    name: "change",
    component: () => import("../components/Admin/change.vue")
  },
  {
    path: "/scanning",
    name: "scanning",
    component: () => import("@/components/scanning/index.vue")
  },
  {
    path: "/email",
    name: "email",
    component: () => import("@/components/Admin/email.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/components/Admin/about.vue")
  },
  {
    path: "/set",
    name: "set",
    component: () => import("@/components/Admin/set.vue")
  },
   { path: "/testScan",
    name: "testScan",
    component: () => import("@/components/scanning/testScan.vue")
  },
  { path: "/admin",
    name: "admin",
    component: () => import("@/components/Admin/admin.vue")
  }
 
]

const router = new VueRouter({
  routes
})

export default router
