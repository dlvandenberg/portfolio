export type Skill = {
	name: string;
	colorCode: string;
};

export type KnowingSkill = Skill & {
	yearsExp: number;
};

export type LearningSkill = Skill & {
	version: string;
};
