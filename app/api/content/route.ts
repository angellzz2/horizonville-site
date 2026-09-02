import {env} from "cloudflare:workers";
export async function GET(){try{const row=await (env as any).DB.prepare("SELECT value FROM site_content WHERE key = ?").bind("main").first();return Response.json(row?JSON.parse(row.value):{})}catch{return Response.json({})}}
