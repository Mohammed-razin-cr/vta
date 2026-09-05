import { SITE_URL } from "@/lib/site-config";

export default function sitemap() {
    return [
        {
            url: `${SITE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}

