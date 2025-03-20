import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import {auth, currentUser} from "@clerk/nextjs/server";

import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!
})

/**
 * Mengonversi HSL ke hex. 
 * @param h - hue (0-360)
 * @param s - saturation (0-100)
 * @param l - lightness (0-100)
 * @returns string warna dalam format hex, misalnya "#45a1ff"
 */
function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const color = l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }


export async function POST(req: Request) {
    const { sessionClaims } = await auth();
    if(!sessionClaims){
        return new Response("Unauthorized", {status: 401});
    }

    const user = await currentUser();
    if(!user){
        return new Response("Unauthorized", {status: 401});
    }

    const { room } = await req.json();
    const document = await convex.query(api.documents.getById, {id:room});

    if(!document){
        return new Response("Unauthorized", {status:401})
    }

    const isOwner = document.ownerId === user.id;
    const isOrganizationMember = 
    !!(document.organizationId && document.organizationId === sessionClaims.org_id);

    if(!isOwner && !isOrganizationMember){
        return new Response("Unauthorized", {status:401})
    }

    const name =
    user.fullName ??
    user.primaryEmailAddress?.emailAddress ??
    "Anonymous";

    // Hitung hue berdasarkan nama, lalu konversi HSL -> hex
    const nameToNumber = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = Math.abs(nameToNumber) % 360;
    const color = hslToHex(hue, 80, 60); // hsl( hue, 80%, 60% ) -> "#xxxxxx"
    
    const session = liveblocks.prepareSession(user.id, {
        userInfo: {
            name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
            avatar: user.imageUrl,
            color,
        },
    });
    
    session.allow(room,session.FULL_ACCESS);
    const {body, status } = await session.authorize();

    return new Response(body, {status});
};