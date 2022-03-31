import React from 'react';
import renderer from 'react-test-renderer';
import PhotoDetail from "../pages/PhotoDetail";
import "react-router-dom";

jest.mock("react-router-dom", () => {
    return {
        useLocation: () => {
            return {
                state: {
                  item: {
                    user: 'Test1',
                    largeImageURL: 'https://pixabay.com/get/g574228b852da9a2aecb82f1e915bd979194478cb4df1e4d44d6d74dbabcea4dcd7b66d2afab4d14f66452bf9f59de6d30033dc293d5b8044e515775552420e62_1280.jpg',
                    downloads: 33333,
                    views: 12312,
                    imageSize: 12343434,
                    tags: 'tags'
                  }
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

