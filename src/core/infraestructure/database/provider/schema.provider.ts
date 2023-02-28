import { Connection } from "mongoose";
import { CrudSchema } from "../schema/crud.schema";

export const SchemaProvider = [
    {
        provider: "SchemaProvider",
        inject: ["CONNECTION_DATABASE"],
        useFactory: (conn: Connection) => conn.model("Users", CrudSchema)
    }
]