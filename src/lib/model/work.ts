import type { Skill } from './skill';

export type Work = {
	name: string;
	job: string;
	jobTitle: string;
	dateFrom: string;
	dateTo?: string;
	description: string;
	skills: Skill[];
};
