import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Hero from '../hero.svelte';

describe('Hero.svelte', () => {
	it('should render hero items when mounted', () => {
		render(Hero);
		expect(screen.getByText('Dennis van den Berg')).toBeInTheDocument();
		expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
	});

	it('should not render hero items when not mounted', () => {
		expect(screen.queryByText('Dennis van den Berg')).not.toBeInTheDocument();
		expect(screen.queryByText('Full Stack Developer')).not.toBeInTheDocument();
	});
});
