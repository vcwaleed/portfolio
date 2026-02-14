import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('./components/HomeComponet.vue'),
    meta: {
      title: 'Talha Waleed | Software Engineer & AI/ML | Vue.js & Python Full Stack',
      description: 'Talha Waleed is a Software Engineer specializing in AI/ML, Vue.js, and Python backend development. Explore his portfolio and expertise.',
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
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Comsats University"
            }
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
          "name": "Talha Waleed - Software Engineer Portfolio",
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
      title: 'About Talha Waleed | Software Engineer Profile & Expertise (AI/ML, Vue.js, Python)',
      description: 'Discover Talha Waleed\'s professional journey, expertise in Machine Learning, AI, Vue.js, and Full Stack development. View his detailed profile.',
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
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Comsats University Islamabad"
            }
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
      title: 'Talha Waleed Projects | AI, ML, Vue.js & Python Portfolio',
      description: 'Showcasing Talha Waleed\'s innovative projects in AI-powered web apps, machine learning, Vue.js frontend, and Python backend solutions.',
      image: 'https://talhawaleed.online/linkedmatrix.png',
      robots: 'index,follow'
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    component: () => import('./components/ContactComponent.vue'),
    meta: {
      title: 'Contact Talha Waleed | Hire Full Stack, AI/ML & Vue.js Developer',
      description: 'Connect with Talha Waleed for software engineering collaborations, AI/ML projects, or Vue.js development opportunities.',
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
