import Vapi from "@vapi-ai/web";
const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
if (!token) {
  console.error("NEXT_PUBLIC_VAPI_WEB_TOKEN is missing!");
  throw new Error("NEXT_PUBLIC_VAPI_WEB_TOKEN is missing");
}
console.log("Vapi Token loaded, starts with:", token.substring(0, 15) + "...");
export const vapi = new Vapi(token);