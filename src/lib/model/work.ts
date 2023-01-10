import type { Skill } from './skill';

export type Work = {
	name: string;
	company: string;
	jobTitle: string;
	dateFrom: string;
	dateTo?: string;
	description: string;
	skills: Skill[];
};
