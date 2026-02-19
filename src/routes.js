import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('./components/HomeComponet.vue'),
    meta: {
      title: 'Talha Waleed | Software Engineer | ML Engineer, AI Developer, Vue.js & Python',
      description: 'Official portfolio of Talha Waleed, a Software Engineer and Full Stack Developer specializing in Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Backend Development, and Python.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow',
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Talha Waleed",
          "jobTitle": "Software Engineer",
          "url": "https://talhawaleed.online",
          "image": "https://talhawaleed.online/linkedmatrix.png",
          "description": "Software Engineer specializing in Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Backend Development, Python, and Full Stack Development.",
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Comsats University"
            }
          ],
          "knowsAbout": [
            "Machine Learning",
            "Artificial Intelligence",
            "Frontend Development",
            "Vue.js",
            "Modern Frontend Technologies",
            "Backend Development",
            "Python",
            "Full Stack Development"
          ],
          "sameAs": [
            "https://www.linkedin.com/in/talhawaleed/",
            "https://github.com/vcwaleed"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Engineer",
            "description": "Expert in Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Python Backend, and Full Stack Development.",
            "skills": "Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Python Backend, Full Stack Development, JavaScript, Python, Node.js, Databases"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Talha Waleed - Software Engineer, AI/ML, Vue.js and Python Portfolio",
          "url": "https://talhawaleed.online",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://talhawaleed.online/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('./components/AboutComponent.vue'),
    meta: {
      title: 'About Talha Waleed | Software Engineer, ML Engineer, AI Developer',
      description: 'Learn about Talha Waleed, a Software Engineer specializing in ML, AI, Vue.js, modern frontend technologies, backend systems, Python, and full stack development.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow',
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Talha Waleed",
          "jobTitle": "Software Engineer",
          "url": "https://talhawaleed.online/about",
          "image": "https://talhawaleed.online/linkedmatrix.png",
          "description": "Software Engineer specializing in ML, AI, Vue.js, Frontend Development, Backend Development, Python, and Full Stack Development.",
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Comsats University Islamabad"
            }
          ],
          "knowsAbout": [
            "Machine Learning",
            "Artificial Intelligence",
            "Frontend Development",
            "Vue.js",
            "Modern Frontend Technologies",
            "Backend Development",
            "Python",
            "Full Stack Development"
          ],
          "sameAs": [
            "https://www.linkedin.com/in/talhawaleed/",
            "https://github.com/vcwaleed"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Engineer",
            "description": "Expert in Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Python Backend, and Full Stack Development.",
            "skills": "Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Python Backend, Full Stack Development, JavaScript, Python, Node.js, Databases"
          }
        }
      ]
    }
  },
  {
    name: 'Projects',
    path: '/projects',
    component: () => import('./components/OpenSourceProjects.vue'),
    meta: {
      title: 'Talha Waleed Projects | Full Stack, AI/ML, Vue.js, Python',
      description: 'Explore software engineering projects by Talha Waleed across AI/ML applications, Vue.js frontend systems, Python backend services, and full stack development.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    component: () => import('./components/ContactComponent.vue'),
    meta: {
      title: 'Contact Talha Waleed | Software Engineer, AI/ML, Vue.js, Python',
      description: 'Contact Talha Waleed for Software Engineer roles and project collaborations in ML, AI, Vue.js, frontend, backend, Python, and full stack development.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    name: 'Showcase',
    path: '/ui-kit',
    component: () => import('./components/UIKitComponent.vue'),
    meta: {
      title: 'Landing Page Showcase | Talha Waleed',
      description: 'Browse landing pages, product websites, and UI showcase projects built by Talha Waleed.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: { template: '<div class="min-h-screen bg-background-dark text-slate-100 flex items-center justify-center text-xl font-semibold">404 Page Not Found</div>' },
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
