// @flow
import React from 'react';
import { render, screen } from '@testing-library/react';
import DescriptionWithLinks from '../descriptionWithLinks';

function normalizeUrl(url) {
    return url.startsWith('http') ? url : `https://${url}`;
}


describe('<DescriptionWithLinks />', () => {
    it('should display the description when no links are provided', () => {
        render(
            <DescriptionWithLinks
                description="My test description"
                links={[]}
            />
        );
        expect(screen.getByText('My test description')).toBeInTheDocument();
    });

    it('should replace matching url with <Link> component', () => {
        render(
            <DescriptionWithLinks
                description="Check out www.test.com for more info"
                links={[{ url: 'www.test.com', text: 'Test Site' }]}
            />
        );

        const link = screen.getByText('Test Site');
        expect(link).toBeInTheDocument();
        expect(link.tagName.toLowerCase()).toBe('a');
        expect(link).toHaveAttribute('href', normalizeUrl('www.test.com'));
    });

    it('should render multiple links if multiple matches are found', () => {
        render(
            <DescriptionWithLinks
                description="Visit www.a.com and also go to www.b.com"
                links={[
                    { url: 'www.a.com', text: 'A Site' },
                    { url: 'www.b.com', text: 'B Site' }
                ]}
            />
        );

        expect(screen.getByText('A Site')).toHaveAttribute('href', normalizeUrl('www.a.com'));
        expect(screen.getByText('B Site')).toHaveAttribute('href', normalizeUrl('www.b.com'));
    });

    it('should keep unmatched text as is', () => {
        render(
            <DescriptionWithLinks
                description="Nothing to link here."
                links={[{ url: 'www.fake.com', text: 'Fake' }]}
            />
        );

        expect(screen.getByText('Nothing to link here.')).toBeInTheDocument();
    });

    it('should match full https URL in the description', () => {
        render(
            <DescriptionWithLinks
                description="Visit https://www.secure.com now."
                links={[{ url: 'https://www.secure.com', text: 'Secure Site' }]}
            />
        );

        const link = screen.getByText('Secure Site');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.secure.com');
    });

    it('should replace all occurrences of the same URL', () => {
        render(
            <DescriptionWithLinks
                description="Go to www.repeat.com and again to www.repeat.com"
                links={[{ url: 'www.repeat.com', text: 'Repeat' }]}
            />
        );

        const links = screen.getAllByText('Repeat');
        expect(links).toHaveLength(2);
        links.forEach(link => expect(link).toHaveAttribute('href', normalizeUrl('www.repeat.com')));
    });
});
