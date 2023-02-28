import { IUser } from "../domain/interfaces/user.interface";
import { ICrudRepository } from "../domain/repository/crud.repository";
import { ICrudUseCase } from "../domain/use-case/crud.use-case.interface";

export class CrudUseCase implements ICrudUseCase{
    /**
     *
     */
    constructor(
        private readonly _repository: ICrudRepository
    ) {}

    searchAllUsers(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    createUser(user: IUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteUser(userName: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateUser(user: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
}