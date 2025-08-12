import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'URIEL_PROFILE.pdf');
    try {
        const fileBuffer = await fs.readFile(filePath);
        return new NextResponse(new Uint8Array(fileBuffer).buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="URIEL_PROFILE.pdf"',
            },
        });
    } catch {
        return new NextResponse('File not found', { status: 404 });
    }
}
