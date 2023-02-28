import { IUser } from "../interfaces/user.interface"

export interface ICrudUseCase{
    searchAllUsers(): Promise<IUser[]>
    createUser(user: IUser):Promise<boolean>
    deleteUser(userName: string): Promise<boolean>
    updateUser(user: IUser): Promise<IUser>
}