import { db } from '../../lib/sql';

export async function GET() {
    try {
        const [rows] = await db.query('SELECT * FROM candidates');
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Database query failed' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
