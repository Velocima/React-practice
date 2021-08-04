import BookInfo from '.';
import { render, screen, within } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('Album Component', () => {
	const mockData = {
		data: {
			description: 'Test description',
		},
	};

	beforeEach(() => jest.resetAllMocks());

	test('Makes a call to the api on load and renders book description', async () => {
		axios.get.mockResolvedValue(mockData);
		render(<BookInfo />);
		const description = await screen.findByRole('article');
		expect(description.textContent).toEqual(mockData.data.description);
	});

	test('Renders loading before the api returns data', async () => {
		axios.get.mockResolvedValue(mockData);
		render(<BookInfo />);
		const initialDescription = screen.getByRole('article');
		expect(initialDescription.textContent).toBe('Loading...');
		const description = await screen.findByRole('article');
		expect(description.textContent).toEqual(mockData.data.description);
	});

	test('Renders error message on api call failing', async () => {
		axios.get.mockRejectedValue(new Error('Request failed'));
		render(<BookInfo />);
		const description = await screen.findByRole('article');
		expect(description.textContent).toContain('Request failed');
	});
});
