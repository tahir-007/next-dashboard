import { NextResponse } from "next/server";

// Importing the application data from a JSON file
const apps = require("./application.json");

// This function handles GET requests
export function GET() {
  const response = NextResponse.json(apps, { status: 200 });
  return response;
}
