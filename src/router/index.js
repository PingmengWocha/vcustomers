import Vue from 'vue'
import VueRouter from 'vue-router'

const Customers = () => import('../components/Customers')
const About = () => import('../components/About')
const Add = () => import('../components/Add')
const CustomerDetail = () => import('../components/CustomerDetails')
const Edit = () => import('../components/Edit')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/customers'
    },
    {
        path: '/customers',
        component: Customers
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/add',
        component: Add
    },
    {
        path: '/customer/:id',
        component: CustomerDetail
    },
    {
        path: '/edit/:id',
        component: Edit
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
