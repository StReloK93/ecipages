import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'
// import { auth } from "../store/auth";
const router = createRouter({
   history: createWebHistory(),
   routes: routes
})

// router.beforeEach((to, from, next) => {
// 	const AuthStore = auth()
   
// 	if (AuthStore.user) {
// 		if (to.meta.guard === 'guest') next({ name: 'main-page' })
// 		else next()

// 	} else {
// 		if (to.meta.guard === 'auth') next({ name: 'login' })
// 		else next()
// 	}
// })


export default router