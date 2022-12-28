import type { Person } from '$lib/model/person';
import type { Project } from '$lib/model/project';
import type { KnowingSkill, LearningSkill } from '$lib/model/skill';
import type { Work } from '$lib/model/work';
import type { PageLoad } from './$types';
import type { HomeData } from './data';

type FetchFn = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export const load = (async ({ fetch }): Promise<HomeData> => {
	const person = await fetchPerson(fetch);
	const workExperience = await fetchWorkExperience(fetch);
	const featuredProject = await fetchFeaturedProject(fetch);
	const projects = await fetchProjects(fetch);
	const skills = await fetchSkills(fetch);
	const learningSkills = await fetchLearningSkills(fetch);

	return {
		person,
		workExperience,
		featuredProject,
		projects,
		skills,
		learningSkills,
	};
}) satisfies PageLoad;

const fetchPerson = async (fetch: FetchFn): Promise<Person> => {
	console.log('fetchPerson');
	return {
		firstName: 'Dennis',
		lastName: 'van den Berg',
		dateOfBirth: '14-10-1989',
		gender: 'Gender.MALE',
		nationality: 'Dutch',
		email: 'dennis@devd.be',
		married: true,
		offspring: 2,
		pets: ['Dog'],
	};
};

const fetchWorkExperience = async (fetch: FetchFn): Promise<Work[]> => {
	console.log('fetchWorkExperience');
	return [
		{
			name: 'Nedap',
			job: 'Nedap Security Management',
			jobTitle: 'Frontend Developer',
			dateFrom: 'July 2022',
			dateTo: 'Present',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'JavaScript',
					colorCode: '#F0DB4F',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
				{
					name: 'HTML',
					colorCode: '#E44D26',
				},
				{
					name: 'CSS',
					colorCode: '#2965F1',
				},
				{
					name: 'Docker',
					colorCode: '#0DB7ED',
				},
			],
		},
		{
			name: 'Carthago-ICT',
			job: 'Carthago ICT',
			jobTitle: 'Full Stack Developer',
			dateFrom: 'September 2013',
			dateTo: 'July 2022',
			description:
				'Curabitur in ligula lacus. Sed congue, nunc vitae molestie commodo, tellus mauris finibus odio, vulputate accumsan enim mauris eget lectus. Aenean eget convallis tellus. Aenean nec rutrum ante. Nulla vitae tortor ut erat dictum imperdiet. Nullam auctor mi eu vestibulum posuere.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'JavaScript',
					colorCode: '#F0DB4F',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
				{
					name: 'Docker',
					colorCode: '#0DB7ED',
				},
			],
		},
		{
			name: 'Thales',
			job: 'Thales',
			jobTitle: 'Full Stack Developer',
			dateFrom: 'November 2020',
			dateTo: 'July 2022',
			description:
				'Sed venenatis tellus diam, at commodo ligula tincidunt vel. Cras vitae condimentum nisl, facilisis egestas lectus. Integer egestas imperdiet risus in aliquet. Proin ligula purus, aliquet sed eleifend vulputate, rutrum quis diam. Aliquam vitae finibus nulla, non dignissim arcu.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
				{
					name: 'Docker',
					colorCode: '#0DB7ED',
				},
			],
		},
		{
			name: 'Belastingdienst',
			job: 'Belastingdienst',
			jobTitle: 'Full Stack Developer',
			dateFrom: 'September 2018',
			dateTo: 'November 2020',
			description:
				'Sed venenatis tellus diam, at commodo ligula tincidunt vel. Cras vitae condimentum nisl, facilisis egestas lectus. Integer egestas imperdiet risus in aliquet. Proin ligula purus, aliquet sed eleifend vulputate, rutrum quis diam. Aliquam vitae finibus nulla, non dignissim arcu.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
			],
		},
	];
};

const fetchFeaturedProject = async (fetch: FetchFn): Promise<Project | undefined> => {
	console.log('fetchFeaturedProject');
	return {
		title: 'Portfolio website',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
		githubUrl: '',
		websiteUrl: 'https://www.devd.be',
		tags: [
			{
				name: 'Svelte',
				colorCode: '#FF3E00',
			},
			{
				name: 'SvelteKit',
				colorCode: '#FF3E00',
			},
			{
				name: 'TypeScript',
				colorCode: '#007ACC',
			},
			{
				name: 'HTML',
				colorCode: '#E44D26',
			},
			{
				name: 'CSS',
				colorCode: '#2965F1',
			},
		],
	};
};

const fetchProjects = async (fetch: FetchFn): Promise<Project[]> => {
	console.log('fetchProjects');
	return [
		{
			title: 'PWRLifts',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			githubUrl: '',
			websiteUrl: 'https://pwr.devd.be',
			tags: [
				{
					name: 'Angular',
					colorCode: '#FF3E00',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'HTML',
					colorCode: '#E44D26',
				},
				{
					name: 'CSS',
					colorCode: '#2965F1',
				},
			],
		},
		{
			title: 'LeaseCalc',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			githubUrl: 'https://github.com/dlvandenberg/devdbe-leasecalc',
			websiteUrl: 'https://lease.devd.be',
			tags: [
				{
					name: 'Angular',
					colorCode: '#FF3E00',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'HTML',
					colorCode: '#E44D26',
				},
				{
					name: 'CSS',
					colorCode: '#2965F1',
				},
			],
		},
	];
};

const fetchSkills = async (fetch: FetchFn): Promise<KnowingSkill[]> => {
	console.log('fetchSkills');
	return [
		{
			name: 'Angular',
			yearsExp: 4,
			colorCode: '#DD1B16',
		},
		{
			name: 'TypeScript',
			yearsExp: 4,
			colorCode: '#007ACC',
		},
		{
			name: 'JavaScript',
			yearsExp: 3,
			colorCode: '#F0DB4F',
		},
		{
			name: 'Java',
			yearsExp: 8,
			colorCode: '#F89820',
		},
		{
			name: 'HTML',
			yearsExp: 4,
			colorCode: '#E44D26',
		},
		{
			name: 'CSS',
			yearsExp: 4,
			colorCode: '#2965F1',
		},
		{
			name: 'Docker',
			yearsExp: 4,
			colorCode: '#0DB7ED',
		},
	];
};

const fetchLearningSkills = async (fetch: FetchFn): Promise<LearningSkill[]> => {
	console.log('fetchLearningSkills');
	return [
		{
			name: 'Svelte',
			colorCode: '#FF3E00',
			version: '3',
		},
		{
			name: 'SvelteKit',
			colorCode: '#FF3E00',
			version: '1.0.0',
		},
	];
};
