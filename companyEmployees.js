// 5. Write down a nested object to store data of company employees?

const companyEmployees = {
    department1: {
        manager: {
            name: "Aman",
            position: "Manager",
            age: 23,
            salary: 80000
        },
        employees: [
            {
                name: "Ram",
                position: "Software Engineer",
                age: 30,
                salary: 60000
            },
            {
                name: "Mohan",
                position: "Data Analyst",
                age: 35,
                salary: 65000
            }
        ]
    },
    department2: {
        manager: {
            name: "Jofin",
            position: "Director",
            age: 45,
            salary: 90000
        },
        employees: [
            {
                name: "Hari",
                position: "Product Manager",
                age: 38,
                salary: 75000
            },
            {
                name: "Lina",
                position: "Marketing Specialist",
                age: 32,
                salary: 62000
            }
        ]
    }
};
