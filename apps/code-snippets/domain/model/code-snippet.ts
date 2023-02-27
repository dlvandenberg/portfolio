type CodeSnippetBase = {
	title: string;
	tags: string[];
	dateAdded: Date;
};

export type CodeSnippetPost = {
	__typename: 'CodeSnippetPost';
	content: string;
} & CodeSnippetBase;

export type CodeSnippetLink = {
	__typename: 'CodeSnippetLink';
	description: string;
	slug: string;
} & CodeSnippetBase;

export type CodeSnippet = CodeSnippetPost | CodeSnippetLink;
