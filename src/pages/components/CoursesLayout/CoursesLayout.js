import { useNavigate } from "react-router-dom";
import { listUserAccount } from "../../Login/useLogin";

export function getCoursesByUser() {
  const userFromStorage = JSON.parse(localStorage.getItem("user"));
  if (!userFromStorage || !userFromStorage.id) return null;
  return listUserAccount.find((users) => users.id === userFromStorage.id);
}
