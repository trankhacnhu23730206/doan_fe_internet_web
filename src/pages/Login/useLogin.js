import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const listUserAccount = [
    {
        id: 1,
        username: "nguyenvana",
        password: "123456",
        classCode: "CTK42A",
        courses: [
            {
                courseName: "Advanced Mathematics",
                credits: 3,
                professor: "Dr. Nguyen Van B",
                duration: "September 1, 2025 - December 15, 2025"
            },
            {
                courseName: "C++ Programming",
                credits: 4,
                professor: "Ms. Tran Thi C",
                duration: "September 1, 2025 - December 1, 2025"
            }
        ]
    },
    {
        id: 2,
        username: "lethib",
        password: "abcdef",
        classCode: "CTK42B",
        courses: [
            {
                courseName: "Database Systems",
                credits: 3,
                professor: "Dr. Pham Van D",
                duration: "September 5, 2025 - December 10, 2025"
            },
            {
                courseName: "Computer Networks",
                credits: 3,
                professor: "Mr. Nguyen Huu E",
                duration: "September 5, 2025 - December 1, 2025"
            }
        ]
    },
    {
        id: 3,
        username: "tranvanc",
        password: "qwerty",
        classCode: "CTK42C",
        courses: [
            {
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

export function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMassage, setErrorMassage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsFormValid(username.trim() !== '' && password.trim() !== '');
    }, [username, password]);

    const handleLogin = () => {
        if (!(isValidAccount(username, password))) {
            setErrorMassage('Your username or password is incorrect.');
            return;
        }
        else {
            setErrorMassage('');
            navigate(`/courses`)
        }
    };

    return {
        username, password,
        setUsername, setPassword,
        handleLogin, isFormValid, errorMassage
    };
}
