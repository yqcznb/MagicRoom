import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: "/log_regist",
    name: "log_regist",
    component: () => import("../components/log_regist/index.vue")
  },
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
    path: "/classRoom",
    name: "classRoom",
    component: () => import("../components/Teacher/classRoom.vue")
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../components/Teacher/list.vue")
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
  { path: "/admin",
    name: "admin",
    component: () => import("@/components/Admin/admin.vue")
  },
  { path: "/jsone",
    name: "jsone",
    component: () => import("@/components/Admin/jsone.vue")
  },
  { path: "/jstwo",
    name: "jstwo",
    component: () => import("@/components/Admin/jstwo.vue")
  },
  { path: "/jsthree",
    name: "jsthree",
    component: () => import("@/components/Admin/jsthree.vue")
  },
  { path: "/jsfour",
    name: "jsfour",
    component: () => import("@/components/Admin/jsfour.vue")
  },
  { path: "/stu",
    name: "stu",
    component: () => import("@/components/stu/index.vue")
  },
  { path: "/message",
    name: "message",
    component: () => import("@/components/common/message.vue")
  },
  { path: "/buildlist",
    name: "buildlist",
    component: () => import("@/components/stu/clear/buildlist.vue")
  },
  { path: "/setzw",
    name: "setzw",
    component: () => import("@/components/Admin/setzw.vue")
  },
  {
    path: "/common",
    name: 'common',
    component: ()=> import('@/components/common/index.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
