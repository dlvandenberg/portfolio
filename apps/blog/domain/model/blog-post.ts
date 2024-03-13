type BlogPostBase = {
	title: string;
	tags: string[];
	dateAdded: Date;
};

export type BlogPost = {
	__typename: 'BlogPost';
	content: string;
} & BlogPostBase;

export type BlogPostLink = {
	__typename: 'BlogPostLink';
	description: string;
	slug: string;
} & BlogPostBase;

export type BlogPostItem = BlogPost | BlogPostLink;
