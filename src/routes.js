import {createMemoryHistory,createRouter} from 'vue-router'
import HomeComponet from './components/HomeComponet.vue'

const routes = [
    {
        name:'HomeComponet',
        path:'/',
        component:HomeComponet,
    }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes,
});

export default router;