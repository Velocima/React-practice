import Track from '.';
import { screen } from '@testing-library/react';

describe('Track Component', () => {
	beforeEach(() => render(<Track title='Zombie Apocalypse' />));

	test('Each track has a "like" button', () => {
		const likeButton = screen.getByRole('button');
		expect(likeButton.textContent).toEqual('LIKE');
	});

	test('Each track has a title', () => {
		const trackTitle = screen.getByRole('heading');
		expect(trackTitle.textContent).toEqual('Zombie Apocalypse');
	});

	test('A "LIKE" button click changes background color of the track heading', () => {
		const likeButton = screen.getByRole('button');
		const trackTitle = screen.getByRole('heading');
		const oldBgColor = trackTitle.style.backgroundColor;
		userEvent.click(likeButton);
		expect(trackTitle.style.backgroundColor).not.toBe(oldBgColor);
	});

	test('"LIKE" button click changes button to "UNLIKE" button', () => {
		const likeButton = screen.getByRole('button');
		userEvent.click(likeButton);
		expect(likeButton.textContent).toBe('UNLIKE');
	});

	test('"UNLIKE" button click changes button to "LIKE" button', () => {
		const likeButton = screen.getByRole('button');
		const trackTitle = screen.getByRole('heading');
		const oldBgColor = trackTitle.style.backgroundColor;
		userEvent.click(likeButton);
		userEvent.click(likeButton);
		expect(likeButton.textContent).toBe('LIKE');
		expect(trackTitle.style.backgroundColor).toBe(oldBgColor);
	});
});
