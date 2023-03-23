import { getRequest } from "./Request";

type User = {
    id: number;
    firstname: string;
    lastname: string;
    isActive: boolean;
    username: string;
    password: string;
    role: any;
};

type GetUsersResponse = {
    data: User[];
};

class UserService {

    static getAllUsers() {
        return getRequest<GetUsersResponse>({
            url: "/users",
            method: "GET",
        });
    }


    static getUserById(id: string) {
        return getRequest({
            url: "/users/id/" + id,
            method: "GET"
        });
    }

    static getUserProfile(token: string) {
        return getRequest<User>({
            url: "/profile/",
            method: "GET"
        }, token);
    }
}

export default UserService;
export type { User, GetUsersResponse };
