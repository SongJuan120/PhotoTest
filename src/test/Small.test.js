
import React from 'react';
import renderer from 'react-test-renderer';
import Small from "../Small";

test('render Small component', () => {

  // const minProps = {
  //     isLoading: false,
  //     data: [],
  //     err: null
  // };  

  const component = renderer.create(
    <Small />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});

