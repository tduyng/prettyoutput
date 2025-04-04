import { prettyoutput } from '../src/index.js'

const data = {
    username: 'tduyng',
    url: 'https://github.com/tduyng',
    projects: ['@tduyng/prettyoutput', '@tduyng/logger'],
    age: 18,
    details: {
        hobbies: ['coding', 'gaming', 'reading'],
        education: {
            degree: 'Bachelor of Science',
            major: 'Computer Science',
            graduationYear: 2022,
        },
        workExperience: [
            {
                company: 'TechCorp',
                position: 'Software Engineer',
                years: 2,
            },
            {
                company: 'WebSolutions',
                position: 'Frontend Developer',
                years: 1,
            },
        ],
    },
    isActive: true,
    contact: {
        email: 'tduyng@example.com',
        phone: {
            home: '123-456-7890',
            work: '098-765-4321',
        },
    },
    socialMedia: {
        twitter: '@tduyng',
        linkedIn: 'linkedin.com/tduyng',
    },
}

console.log(prettyoutput(data, { maxDepth: 5, colors: { number: 'blue' } }))
