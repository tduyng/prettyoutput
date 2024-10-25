import { prettyoutput } from '../src/index.js'

const data = {
    username: 'ekino',
    url: 'https://github.com/ekino',
    projects: ['@ekino/prettyoutput', '@ekino/logger', '@ekino/veggies'],
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
        email: 'ekino@example.com',
        phone: {
            home: '123-456-7890',
            work: '098-765-4321',
        },
    },
    socialMedia: {
        twitter: '@ekino_France',
        linkedIn: 'linkedin.com/company/ekino',
    },
}

console.log(prettyoutput(data, { maxDepth: 5, colors: { number: 'blue' } }))
