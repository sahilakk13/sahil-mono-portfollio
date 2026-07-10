import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Studio from '../pages/Studio';
import WorkOne from '../pages/WorkOne';
import WorkTwo from '../pages/WorkTwo';
import WorkThree from '../pages/WorkThree';
import ProjectDetail from '../pages/ProjectDetail';
import BlogOne from '../pages/BlogOne';
import BlogTwo from '../pages/BlogTwo';
import BlogThree from '../pages/BlogThree';
import PostDetail from '../pages/PostDetail';
import ContactOne from '../pages/ContactOne';
import ContactTwo from '../pages/ContactTwo';
import ContactThree from '../pages/ContactThree';
import NotFound from '../pages/NotFound';

const projectSlugs = [
  'edmaxex',
  'budgetbites',
  'hm-bi-analytics',
  'ai-tryon-system',
  'leadpilot',
  'portfolio-website',
];

const postSlugs = [
  'dashboard-decisions',
  'idea-to-execution',
  'portfolio-clarity',
  'scalable-digital-systems',
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'studio', element: <Studio /> },
      { path: 'work/work-1', element: <WorkOne /> },
      { path: 'work/work-2', element: <WorkTwo /> },
      { path: 'work/work-3', element: <WorkThree /> },
      ...projectSlugs.map((slug) => ({
        path: `project/${slug}`,
        element: <ProjectDetail />,
      })),
      { path: 'blog/blog-1', element: <BlogOne /> },
      { path: 'blog/blog-2', element: <BlogTwo /> },
      { path: 'blog/blog-3', element: <BlogThree /> },
      ...postSlugs.map((slug) => ({
        path: `post/${slug}`,
        element: <PostDetail />,
      })),
      { path: 'contact/contact-1', element: <ContactOne /> },
      { path: 'contact/contact-2', element: <ContactTwo /> },
      { path: 'contact/contact-3', element: <ContactThree /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
]);
