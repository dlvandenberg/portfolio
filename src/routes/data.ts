import type { Person } from '$lib/model/person';
import type { Project } from '$lib/model/project';
import type { KnowingSkill, LearningSkill } from '$lib/model/skill';
import type { Work } from '$lib/model/work';

export interface HomeData {
	person?: Person;
	workExperience?: Work[];
	featuredProject?: Project;
	projects?: Project[];
	skills?: KnowingSkill[];
	learningSkills?: LearningSkill[];
}
