import type { SkillIcon } from '$lib/model/skill-icon';

const keys: (keyof SkillIcon)[] = ['name', 'icon'];

export const isSkillIcon = (value: unknown): value is SkillIcon => {
	return typeof value === 'object' && !!value && keys.every((key) => key in value);
};
