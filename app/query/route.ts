import postgres from 'postgres';

export async function GET() {
  try {
    // Use DATABASE_URL directly from environment
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      return Response.json({ 
        error: "DATABASE_URL is missing",
        availableVars: Object.keys(process.env).filter(key => key.includes('POSTGRES') || key.includes('DATABASE'))
      }, { status: 500 });
    }

    const sql = postgres(dbUrl);
    
    const data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;

    return Response.json(data);
  } catch (error) {
    return Response.json({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      envCheck: {
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        allDbVars: Object.keys(process.env).filter(key => key.includes('POSTGRES') || key.includes('DATABASE'))
      }
    }, { status: 500 });
  }
}
