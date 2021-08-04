import Album from '.';
import { screen, within } from '@testing-library/react';

describe('Album Component', () => {
	const mockData = {
		title: 'test album',
		trackList: ['test song 1', 'test song 2', 'test song 3'],
	};

	beforeEach(() => render(<Album title={mockData.title} trackList={mockData.trackList} />));

	test('Displays the track title', () => {
		const title = screen.getAllByRole('heading')[0];
		expect(title.textContent).toEqual(mockData.title);
	});

	test('Displays a list item for each track', () => {
		const trackList = screen.getByRole('list');
		const listItems = within(trackList).getAllByRole('listitem');
		expect(listItems.length).toEqual(mockData.trackList.length);
	});

	test('Displays the correct title for each track', () => {
		const trackList = screen.getByRole('list');
		const listItems = within(trackList).getAllByRole('listitem');
		const randomTrackIndex = Math.floor(Math.random() * mockData.trackList.length);
		const randomTrackTitle = within(listItems[randomTrackIndex]).getByRole('heading');
		expect(randomTrackTitle.textContent).toEqual(mockData.trackList[randomTrackIndex]);
	});
});
