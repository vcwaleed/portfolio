import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('./components/HomeComponet.vue'),
    meta: {
      title: 'Talha Waleed - Vue.js Developer',
      description: 'Talha Waleed - Official Portfolio Website. Experienced Vue.js and Frontend Developer showcasing projects and skills.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('./components/AboutComponent.vue'),
    meta: {
      title: 'About Talha Waleed - Vue.js Developer',
      description: 'Learn more about Talha Waleed, a skilled Vue.js and Frontend Developer with expertise in modern web technologies.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    name: 'Projects',
    path: '/projects',
    component: () => import('./components/OpenSourceProjects.vue'),
    meta: {
      title: 'Talha Waleed - Projects & Portfolio',
      description: 'Explore the portfolio of Talha Waleed, featuring various frontend and Vue.js development projects.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    component: () => import('./components/ContactComponent.vue'),
    meta: {
      title: 'Contact Talha Waleed - Frontend Developer',
      description: 'Get in touch with Talha Waleed for collaborations, job opportunities, or inquiries about frontend development.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: { template: '<div>404 Page Not Found</div>' },
    meta: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.',
      robots: 'noindex,nofollow'
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
