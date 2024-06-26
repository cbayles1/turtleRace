import { NextResponse } from "next/server";
const db = require('../db.js');

export async function POST(request) {
    const {userId, turtleId} = await request.json();
    await db.vote(userId, turtleId);
    return NextResponse.json({});
}