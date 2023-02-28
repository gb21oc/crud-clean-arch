import * as mongoose from 'mongoose';

export const databaseProvider = [
    {
        provide: "CONNECTION_DATABASE",
        useFactory: async (): Promise<typeof mongoose> => {
            return await mongoose.connect('mongodb://localhost/nest')
        }
    }
]