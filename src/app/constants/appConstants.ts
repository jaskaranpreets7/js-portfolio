import { IProjects } from "../projects/page"

export const TypeToLabel: Record<string, string> = {
    professional: 'Professional',
    'non-professional': 'Side Projects',
}

export const projects: IProjects[] = [
    {
        company: 'Bolster AI',
        title: 'SaaS Platform & Internal Applications',
        description: 'Enterprise-grade B2B SaaS platform for automated detection and takedown of phishing and scam URLs across channels like web, social media, app stores, abuse mailboxes, and dark web. Included pre & post monitoring and internal workflows.',
        type: 'professional',
        techStack:['React','TypeScript', 'NestJS', 'ElasticSearch','PostgreSQL', 'SCSS', 'Material UI', 'Apexcharts', 'AgGrid', 'Redis', 'AWS', 'Redux', 'Nats', 'Cassandra', 'Rust', 'BitBucket' ],
        experience: [
            "Developed end-to-end global search integrating queries across multiple modules with different data sources and data models.",
            "Built an AI-powered chatbot, saving 3 months of engineering effort and eliminating the need for a separate ClickHouse-based solution.",
            "Led two complete dashboard UX redesigns based on evolving product and usability goals.",
            "Built and maintained internal tools for takedown templating, feature access control, and operational workflows.",
            "Consolidated a Rust-based microservice into a monorepo, reducing operational costs by $1,000 per month.",
            "Mentored and onboarded junior engineers, conducting regular code reviews and knowledge-sharing sessions.",
            "Implemented favicon extraction logic to improve brand detection accuracy and reduce false positives by 25%.",
            "Integrated AG Grid for high-performance, flexible table rendering across the Bolster dashboard .",
            "Designed and implemented a custom session timeout feature with, Customer-specific enablement, Inactivity prompts after 8 minutes, with token expiry at 30 minutes, And Seamless background token refresh for active users without disrupting UX.",
            "Delivered customizable report generation supporting monthly, quarterly, yearly, and custom ranges.",
            "Developed an email digest system, balancing between SendGrid templates and in-house rendering pipelines.",
            "Added light/dark mode toggling via a custom React context, decoupled from Material-UI theming due to hybrid React Bootstrap integration.",
            "Maintained and extended internal tools, including CRUD operations for SOC analysts and admin teams.",
            "Implemented insights pagination for improved data performance and user navigation on analytics screens."
        ]
    },
    {
        company: 'PepsiCo',
        title: 'Precision Merchandising Platform (PLM)',
        description: 'A Precision Merchandising platform designed to deliver PDF-formatted planograms based on dynamic search criteria. PLM is a standalone application integrated within a Microfrontend Architecture, enabling consultants to strategically plan product placements across various store formats.',
        type: 'professional',
        techStack: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'Material UI', 'SCSS', 'Redis', 'AWS', 'Redux', 'Github'],
        experience: [
            'Designed and developed reusable, accessible, and performant UI components (Buttons, Inputs, Modals, and Tables) for the PLM application using React and Material UI.',
            'Improved unit test coverage from 10% to 70%, achieving quality benchmarks using Jest and Enzyme, ensuring reliable and maintainable code.',
            'Implemented PDF rendering functionality to display planograms dynamically based on user-defined search filters such as store type, region, and product category.',
            'Optimized API calls and state management using Redux and Redux Thunk, reducing page load times and improving overall user experience.',
            'Integrated client-side caching strategies with Redis for faster retrieval of frequently accessed planograms and search results.',
            'Refactored legacy components to follow modern React practices, improving code readability and reducing technical debt.',
            'Collaborated with UX/UI designers and backend developers to align feature implementations with business requirements and architectural standards.',
            'Enhanced error handling, user notifications, and form validations for a more robust and user-friendly interface.',
            'Contributed to the Microfrontend integration strategy, ensuring seamless embedding of the PLM application into the larger enterprise platform.'
        ]
    },
    {
        company: '7-Eleven',
        title: 'Cash & Audit Management System',
        description: 'Global financial system for managing cash audits, reconciliation workflows, and store-level compliance reporting using a cloud-based architecture.',
        type: 'professional',
        techStack: ['React', 'Redux', 'AWS Lambda', 'Node.js', 'MongoDB', 'SCSS', 'JavaScript', 'Jest', 'Enzyme', 'Storybook', 'AgGrid', 'Gitlab'],
        experience:[
            'Integrated AG Grid with server-side row model for handling large financial data sets efficiently with pagination, sorting, and dynamic filtering.',
            'Implemented custom cell renderers and value formatters for currency, percentage, and date columns within AG Grid.',
            'Developed conditional row styling to visually highlight anomalies, failed audits, and pending reconciliations.',
            'Built advanced audit logs with expandable master-detail grids for drill-down views of individual transactions.',
            'Configured AG Grid’s infinite scrolling with backend pagination via REST APIs.',
            'Enabled column visibility toggles, pinning, and export to CSV for financial reports directly from the grid.',
            'Optimized grid performance using memoized components, grid auto-sizing, and virtualization techniques.',
            'Integrated Storybook for documenting grid components and maintaining a live UI library for audit workflows.',
            'Added responsive grid layouts and adaptive column widths to support both desktop and tablet-based financial audits.',
        ]
    },
    {
        company: '7-Eleven',
        title: 'Live View Tracker (LVT)',
        description: 'A real-time ReactJS web application enabling store associates to monitor mobile checkout activity and in-store customer interactions across multiple store locations, providing operational visibility and improving customer experience.',
        type: 'professional',
        techStack: ['React', 'AWS Lambda', 'Node.js', 'MongoDB', 'WebSocket', 'SCSS', 'JavaScript', 'Jest', 'Enzyme', 'Kotlin','Gitlab'],
        experience: [
            'Led the end-to-end development of the LVT application as a greenfield project, delivering real-time tracking of customer mobile checkout activities inside physical store locations.',
            'Implemented a complex 3-state card flow with asynchronous timers and UI transitions to represent different customer checkout states: scanning items (2 mins timer), payment confirmation (1 min color transition), and final barcode confirmation (30 sec display).',
            'Built reusable, scalable UI components including Cards, Titles, Avatars, and Notification elements, ensuring consistent design and functionality across the application.',
            'Integrated real-time bidirectional communication using WebSockets to instantly update customer activity statuses and reflect checkout actions on the dashboard without manual refresh.',
            'Optimized the application for responsive behavior across large desktop resolutions and 7-inch Android devices using SCSS, CSS Grid, and media queries.',
            'Enhanced error handling, user notifications, and edge case management for a smoother and more resilient user experience during live checkout operations.',
            'Collaborated closely with UX/UI designers, backend developers, and stakeholders to refine feature specifications, iterate on prototypes, and align with operational needs.',
            'Contributed to AWS Lambda-based backend integrations for event-driven updates and asynchronous customer activity tracking.'
        ]
    },
    {
        company: 'Blue Cross Blue Shield - Carefirst',
        title: 'Customer Insurance Portal',
        description: 'Self-service portal where users can manage insurance plans, assign primary physicians, file claims, and track the status of healthcare services for themselves and their dependents.',
        type: 'professional',
        techStack: ['AngularJS', 'Angular 4', 'Bootstrap', 'TypeScript', 'CSS', 'Java', 'MySQL','Jasmine','Karma','SVN'],
        experience: [
          'Led the migration of a large-scale AngularJS codebase to Angular 4, implementing modern architecture patterns and reusable, modular components.',
          'Redesigned UI components with responsive Bootstrap layouts, improving mobile usability and accessibility scores by 30%.',
          'Collaborated with backend teams to refactor RESTful service integrations for improved performance and reliability.',
          'Optimized critical user workflows such as plan selection, claim filing, and coverage status tracking for a 20% reduction in average completion time.',
          'Developed a custom reusable form validation library in TypeScript to streamline form control management across the portal.',
          'Implemented unit and integration test coverage using Jasmine and Karma, increasing codebase reliability and reducing QA feedback loops.'
        ]
    },
    {
        company: 'Blogs Manager LLC',
        title: 'Blogsmanager.com',
        description: 'A personal side project aimed at helping users centralize and organize their favorite blogs in a single, intuitive, and visually appealing interface.',
        type: 'non-professional',
        techStack: ['React', 'Firebase', 'SCSS', 'JavaScript', 'Stripe', 'Github'],
        experience: [
          'Founded and built Blogsmanager.com, enabling users to save and manage their favorite blog posts in one centralized platform.',
          'Designed and developed the application from scratch using React with modern hooks, context API, and Material UI components for a clean, responsive, and accessible UI.',
          'Implemented a serverless backend architecture using Firebase Firestore for data storage, Firebase Authentication for user login, and Firebase Hosting for deployment.',
          'Integrated Stripe for future subscription management and planned premium features.',
          'Prototyped and designed user experience (UX) flows and wireframes to ensure intuitive navigation and user-centric interactions.',
          'Planned and began development of a Chrome extension to allow users to quickly save blogs directly from their browser.',
          'Practiced continuous improvement through iterative feature releases, bug fixes, and user feedback collection.',
          'Managed project deployment, CI/CD setup, and version control via GitHub Actions and Firebase pipelines.',
          'Exploring upcoming features such as blog content categorization, reading time estimation, and a personalized dashboard.'
        ]
    },
    {
        company: 'Tesla Inc',
        title: 'Quality Assurance Engineer',
        description: 'Oversaw quality assurance operations for Model S door handles and Model S/X side view mirrors within the general assembly line to maintain product reliability and manufacturing standards.',
        type: 'professional',
        techStack: [],
        experience: [
          'Performed hands-on quality inspections and defect analysis for Model S and Model X door handles and side view mirrors on the general assembly line.',
          'Collaborated with manufacturing engineers and line supervisors to identify root causes for recurring defects and implemented corrective actions.',
          'Developed and executed automated test plans for high-risk components, reducing overall defect rates by 20%.',
          'Proactively streamlined QA workflows, minimizing inspection cycle time and increasing throughput efficiency.',
          'Recognized by management for initiative in driving quality improvements and operational reliability in high-volume production settings.',
        ]
      }
]
