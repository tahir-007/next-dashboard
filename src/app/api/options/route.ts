import { NextResponse } from "next/server";
// Importing the application data from a JSON file
const options = require("./options.json");

// This function handles GET requests
export function GET() {
  const response = NextResponse.json(options, { status: 200 });
  return response;
}
