import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Pokemon from '../../components/pokemon/Pokemon';

describe('component <Pokemon>', () => {
  const pokemon = [
    {
      image: 'aaa',
      name: 'bulbasaur',
      url: 'https...',
    },
    {
      image: 'bbbb',
      name: 'bulbasaur',
      url: 'https...',
    },
    {
      image: 'ccc',
      name: 'bulbasaur',
      url: 'https...',
    },
  ];

  it('should have the page title', () => {
    const { getByText } = render(<Pokemon pokemon={pokemon} />);
    expect(getByText(/Escolha seu pokemon/)).toBeInTheDocument();
  });

  it('should have link in item of the array', async () => {
    const { getByTestId } = render(<Pokemon pokemon={pokemon} />);
    const elemntLinkZero = await waitFor(() => getByTestId('link-0'));
    expect(elemntLinkZero).toBeDefined();
  });

  it('should to show a error message when don`t have items on array', () => {
    const { getByTestId } = render(<Pokemon pokemon={[]} />);
    expect(getByTestId('empty-list-pokemon')).toBeDefined();
  });
});
