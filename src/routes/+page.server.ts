import type { ContactInfo, PersonalInfo, Project, Skill, Work } from '$lib/model';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const personalInfoResponse = await fetch('/api/personal-info');
	const contactInfoResponse = await fetch('/api/contact-info');
	const workExperienceResponse = await fetch('/api/works');
	const projectResponse = await fetch('/api/projects');
	const skillResponse = await fetch('/api/skills');
	return {
		personalInfo: (await personalInfoResponse.json()) as PersonalInfo,
		contactInfo: (await contactInfoResponse.json()) as ContactInfo,
		workExperience: (await workExperienceResponse.json()) as Work[],
		projects: (await projectResponse.json()) as Project[],
		skills: (await skillResponse.json()) as Skill[],
	};
}) satisfies PageServerLoad;
