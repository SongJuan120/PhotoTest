import React from 'react';
import renderer from 'react-test-renderer';
import Photo from "../pages/Photo";
import { store } from '../store/store';
import { Provider } from 'react-redux';

test('render Photo component', () => {
  const minProps = {
      isLoading: false,
      data: [],
      err: null
  };
  const component = renderer.create(
    <Provider store={store}>
      <Photo {...minProps} />
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

