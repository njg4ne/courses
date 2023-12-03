import courses from '../../../data/courses.json'
import institutions from '../../../data/institutions.json'
import degrees from '../../../data/degrees.json'

import { error } from '@sveltejs/kit';

export function load() {
    const ids = courses.map(({ id }) => id);
    return { courses, ids, institutions, degrees };
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
