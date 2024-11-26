import mongoose from 'mongoose';

export class DatabaseConnection {

    private static instance: DatabaseConnection;

    private constructor() {
        // Initialize connection
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = DatabaseConnection.connect();
        }

        return DatabaseConnection.instance;
    }

    static async connect() {
        await mongoose.connect('mongodb://localhost:27017/calendly')
    }
}