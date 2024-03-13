import type { BlogPostLink, BlogPost } from '../model';

export function isBlogPost(value: unknown): value is BlogPost {
	return isTaggedObject(value, 'BlogPost');
}

export function isBlogPostLink(value: unknown): value is BlogPostLink {
	return isTaggedObject(value, 'BlogPostLink');
}

function isTaggedObject<T extends string>(value: unknown, tag: T): value is { __typename: T } {
	return !!value && typeof value === 'object' && '__typename' in value && value.__typename === tag;
}

export function isBlogPostsArray(value: unknown): value is BlogPostLink[] {
	return Array.isArray(value) && value.every((element) => isBlogPostLink(element));
}
