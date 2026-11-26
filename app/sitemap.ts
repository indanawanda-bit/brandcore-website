import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
 const paths=["","about","services","industries","industries/corporate","industries/government","products","portfolio","team","insights","careers","contact","legal/terms","legal/privacy","legal/disclaimer","legal/cookies"];
 return paths.map(path=>({url:`https://brandcore.id/${path}`,lastModified:new Date(),changeFrequency:"monthly",priority:path===""?1:0.7}));
}
