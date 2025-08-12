import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const listUserAccount = [
    {
        id: 1,
        fullName: "Nguyen Van A",
        username: "nguyenvana",
        password: "123456",
        studentID: "SV0001",
        gender: "Male",
        classCode: "CTK42A",
        email: "nguyenvana@example.com",
        courses: [
            {
                courseCode: "MATH301",
                courseName: "Advanced Mathematics",
                credits: 3,
                professor: "Dr. Nguyen Van B",
                duration: "September 1, 2025 - December 15, 2025"
            },
            {
                courseCode: "CS102",
                courseName: "C++ Programming",
                credits: 4,
                professor: "Ms. Tran Thi C",
                duration: "September 1, 2025 - December 1, 2025"
            }
        ]
    },
    {
        id: 2,
        fullName: "Le Thi B",
        username: "lethib",
        password: "abcdef",
        studentID: "SV0002",
        gender: "Female",
        classCode: "CTK42B",
        email: "lethib@example.com",
        courses: [
            {
                courseCode: "DB202",
                courseName: "Database Systems",
                credits: 3,
                professor: "Dr. Pham Van D",
                duration: "September 5, 2025 - December 10, 2025"
            },
            {
                courseCode: "NET203",
                courseName: "Computer Networks",
                credits: 3,
                professor: "Mr. Nguyen Huu E",
                duration: "September 5, 2025 - December 1, 2025"
            }
        ]
    },
    {
        id: 3,
        fullName: "Tran Van C",
        username: "tranvanc",
        password: "qwerty",
        studentID: "SV0003",
        gender: "Male",
        classCode: "CTK42C",
        email: "tranvanc@example.com",
        courses: [
            {
                courseCode: "AI401",
                courseName: "Artificial Intelligence",
                credits: 4,
                professor: "Assoc. Prof. Le Quoc F",
                duration: "October 1, 2025 - December 31, 2025"
            }
        ]
    }
];


function isValidAccount(username, password) {
    return listUserAccount.some(user => (user.username === username) && (user.password === password));
}

function getUserByUserName(username) {
    return listUserAccount.find(user => user.username === username);

}
export function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMassage, setErrorMassage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsFormValid(username.trim() !== '' && password.trim() !== '');
    }, [username, password]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!(isValidAccount(username, password))) {
            setErrorMassage('Your username or password is incorrect.');
            return null;
        }
        else {
            const userLogIn = getUserByUserName(username);
            setErrorMassage('');
            localStorage.setItem('user', JSON.stringify(userLogIn));
            return navigate(`/courses`)
        }
    };

    return {
        username, password,
        setUsername, setPassword,
        handleLogin, isFormValid, errorMassage
    };
}
