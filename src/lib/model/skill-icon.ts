import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

type VdbIconName = IconName | 'typescript' | 'svelte' | 'golang';
type VdbIconPrefix = IconPrefix | 'vdb';

export type SkillIcon = {
	name: string;
	icon: VdbIconName;
	prefix?: VdbIconPrefix;
};
