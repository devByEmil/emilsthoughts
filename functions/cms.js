import { createClient } from "contentful";

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
});

const buildPost = (item) => {
    return {
        id: item.sys.id,
        slug: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        publishDate: item.fields.publishDate
            .split("-")
            .reverse()
            .toString()
            .replaceAll(",", "/"),
        cover: {
            title: item.fields.cover.fields.title,
            url: item.fields.cover.fields.file.url,
            details: item.fields.cover.fields.file.details.image,
        },
        content: item.fields.content,
    };
};

const buildCollection = (item) => {
    return {
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        description: item.fields.description,
        cover: {
            title: item.fields.cover.fields.title,
            url: item.fields.cover.fields.file.url,
            details: item.fields.cover.fields.file.details.image,
        },
        posts: item.fields.posts.map((item) => buildPost(item)),
    };
};

export const getPostBySlug = async (entry_slug) => {
    const data = await client.getEntries({
        content_type: "post",
        "fields.slug": entry_slug,
    });
    const item = data.items[0];
    const post = buildPost(item);

    // return { post, data }; // DEV
    return { post };
};

export const getCollectionBySlug = async (slug) => {
    const data = await client.getEntries({
        content_type: "collection",
        "fields.slug": slug,
    });
    const item = data.items[0];
    const collection = buildCollection(item);

    // return { collection, data } // DEV
    return { collection };
};

export const getPostsByTag = async (allowed_tags, descending = true) => {
    // sort order: -1 = ascending, 1 = descending
    let sort_order;
    if (descending) {
        sort_order = 1;
    } else {
        sort_order = -1;
    }

    const data = await client.getEntries({
        content_type: "post",
        "metadata.tags.sys.id[in]": allowed_tags.join(),
    });
    const posts = data.items.map((item) => buildPost(item));

    posts.sort((a, b) => {
        // from "dd/mm/yyyy" to [yyyy,mm,dd]
        a = a.publishDate.split("/").reverse();
        b = b.publishDate.split("/").reverse();
        a.map((item) => parseInt(item));
        b.map((item) => parseInt(item));

        if (b[0] - a[0] === 0) {
            // same year
            if (b[1] - a[1] === 0) {
                // same month
                if (b[2] - a[2] === 0) {
                    // same day > same date > do nothing
                    return 0;
                } else if (b[2] > a[2]) {
                    // day b is greater than day a
                    return sort_order;
                } else {
                    // day b is smaller than day a
                    return -sort_order;
                }
            } else if (b[1] > a[1]) {
                // month b is greater than month a
                return sort_order;
            } else {
                // month b is smaller than month a
                return -sort_order;
            }
        } else if (b[0] > a[0]) {
            // year b is greater than year a
            return sort_order;
        } else {
            // year b is smaller than year a
            return -sort_order;
        }
    });

    return { posts };
};

export const getCollectionsByTag = async (allowed_tags) => {
    const data = await client.getEntries({
        content_type: "collection",
        "metadata.tags.sys.id[in]": allowed_tags.join(),
    });
    const collections = data.items.map((item) => buildCollection(item));

    return { collections, data };
};
