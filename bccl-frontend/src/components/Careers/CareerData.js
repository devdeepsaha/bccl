
// - category: The type of notice. Use one of the following predefined categories:
//      - 'Results': For examination results, selection lists, etc.
//      - 'Applications': For new job applications, course admissions, etc.
//      - 'Recruitment': For interview schedules, lists of eligible candidates, etc.
//      - 'Internal Notices': For departmental guidelines, updates, or other internal announcements.
// - isNew: Set to `true` to display the "NEW" badge, `false` to hide it.
// - link: The URL the notice should link to (e.g., a PDF file or another page). Use '#' for now.
// - date: The date the notice was published, in 'YYYY-MM-DD' format. This is used for sorting.


export const careerData = [
    {
        id: 1,
        title: 'Examination result for the departmental selection for General Clerk Gr. III and other posts.',
        category: 'Results',
        isNew: true,
        link: '#',
        date: '2025-09-03'
    },
    {
        id: 2,
        title: 'Prospectus and application form for admission to the DGNM course at the School of Nursing.',
        category: 'Applications',
        isNew: true,
        link: '#',
        date: '2025-09-01'
    },
    {
        id: 3,
        title: 'Personal Interview for the post of full time Sr. Advisor/Advisor (Skill Development).',
        category: 'Recruitment',
        isNew: true,
        link: '#',
        date: '2025-08-28'
    },
    {
        id: 4,
        title: 'Guidelines for the Departmental Examination for the post of General Clerk Grade-III.',
        category: 'Internal Notices',
        isNew: false,
        link: '#',
        date: '2025-08-25'
    },
    {
        id: 5,
        title: 'List of eligible applicants for departmental selection to the post of General Clerk Grade-III.',
        category: 'Recruitment',
        isNew: false,
        link: '#',
        date: '2025-08-22'
    },
    {
        id: 6,
        title: 'Departmental selection results for the post of Ward Boy/ Aya.',
        category: 'Results',
        isNew: false,
        link: '#',
        date: '2025-08-20'
    },
];
