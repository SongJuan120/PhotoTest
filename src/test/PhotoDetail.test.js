import React from 'react';
import renderer from 'react-test-renderer';
import PhotoDetail from "../pages/PhotoDetail";
import "react-router-dom";

jest.mock("react-router-dom", () => {
    return {
        useLocation: () => {
            return {
                state: {
                  item: {}
                }
            };
        }
    };
});

test('render PhotoDetail component', () => {  
  const component = renderer.create(    
      <PhotoDetail />    
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

