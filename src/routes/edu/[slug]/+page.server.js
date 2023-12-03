import { error } from '@sveltejs/kit';
import courses from '../../../../data/courses.json'
import institutions from '../../../../data/institutions.json'
import degrees from '../../../../data/degrees.json'

export function load({ params }) {
    let { slug } = params;
    if (isNaN(slug)) throw error(404, `Not Found: ${slug} is not a valid course ID`);
    slug = Number(slug);
    const ids = courses.map(({ id }) => id);

    if (!ids.includes(slug)) {
        throw error(404, `Not Found: no course matching ID for ${slug}`);
    }

    let course = courses.find(({ id }) => id === slug);
    let institution = institutions.find(({ id }) => id === course['institution-id']);

    return { course, institution };
}



// {
//     id: 68,
//     'institution-id': 3,
//     'subject-abbreviation': 'CS',
//     subject: 'Computer Science',
//     number: 6501,
//     name: 'Cyber-Physical Systems 2: Advanced Embedded Systems',
//     letter: 'A-',
//     credits: 3,
//     gpa: 3.7,
//     term: 'Spring',
//     year: 2023,
//     level: 'GR'
//   }

// {
//     "id": 1,
//     "abbreviation": "PVCC",
//     "name": "Piedmont Virginia Community Colllege",
//     "city": "Charlottesville",
//     "state": "VA",
//     "country": "USA",
//     "level": "2-year"
// },

// {
//     "id": 1,
//     "institution-id": 1,
//     "type": "Non-degree",
//     "school": "Arts & Humanities Area of Interest",
//     "field": "General Studies",
//     "complete": null,
//     "gpa-earned": 4,
//     "gpa-max": 4,
//     "month": "",
//     "year": null
// },
