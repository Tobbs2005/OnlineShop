export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOL_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {

    }
}