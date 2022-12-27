import type { Skill } from './skill';

export type Project = {
	title: string;
	websiteUrl?: string;
	githubUrl?: string;
	description: string;
	tags: Skill[];
};
