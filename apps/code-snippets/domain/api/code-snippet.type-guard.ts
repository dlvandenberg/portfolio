import type { CodeSnippetLink, CodeSnippetPost } from '../model';

export function isCodeSnippetPost(value: unknown): value is CodeSnippetPost {
	return isTaggedObject(value, 'CodeSnippetPost');
}

export function isCodeSnippetLink(value: unknown): value is CodeSnippetLink {
	return isTaggedObject(value, 'CodeSnippetLink');
}

function isTaggedObject<T extends string>(value: unknown, tag: T): value is { __typename: T } {
	return !!value && typeof value === 'object' && '__typename' in value && value.__typename === tag;
}

export function isCodeSnippetsArray(value: unknown): value is CodeSnippetLink[] {
	return Array.isArray(value) && value.every((element) => isCodeSnippetLink(element));
}
