import type { Project } from '../../domain/model';
import { projectRepository } from '../../infrastructure';

export const projectDataService = {
	getAll,
};

async function getAll(): Promise<Project[]> {
	const files = await projectRepository.getAll();
	const projects: Project[] = files.map(({ metadata, content }) => {
		const { title, websiteUrl, githubUrl, tags, featured } = metadata;
		return {
			title,
			featured,
			websiteUrl,
			githubUrl,
			tags,
			content,
		};
	});

	return projects;
}
