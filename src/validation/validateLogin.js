import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../pages/components/UserContext";

export function CheckUserLogIn() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [userLogedIn, setUserLogedIn] = useState(null);

    useEffect(() => {
        const foundUser = getCoursesByUser(user);

        if (!foundUser || !foundUser.courses || foundUser.courses.length === 0 || foundUser.id === undefined) {
            navigate('/login');
        } else {
            setUserLogedIn(foundUser);
        }
    }, [user, navigate]);

    if (!userLogedIn) return null;
}

function getCoursesByUser(user) {
    if (!user || !user.id) return null;
    return listUserAccount.find(users => users.id === user.id);
};
