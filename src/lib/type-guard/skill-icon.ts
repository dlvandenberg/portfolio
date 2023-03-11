import type { SkillIcon } from '$lib/model/skill-icon';
import { isObject, type RequiredKeys } from './required-keys';

const REQUIRED_KEYS: RequiredKeys<SkillIcon> = {
	icon: true,
	name: true,
	prefix: false,
};

export const isSkillIcon = (value: unknown): value is SkillIcon => isObject(REQUIRED_KEYS, value);
