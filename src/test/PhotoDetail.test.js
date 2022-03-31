import React from 'react';
import renderer from 'react-test-renderer';
import PhotoDetail from "../pages/PhotoDetail";
import "react-router-dom";
import {act, render, fireEvent, cleanup} from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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

describe('render every tag', () => {

    it('render img tag', () => {
      const {getByAltText} = render(<PhotoDetail />)
      getByAltText("detail-image"); // throws an expception if the element cannot be found
    })

    it('renders h2 with Name', () => {
      const wrapper = shallow(<PhotoDetail />);
      const welcome = <h2>Name: Test1</h2>
      expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders h2 with downloads', () => {
      const wrapper = shallow(<PhotoDetail />);
      const welcome = <h2>downloads: 33333</h2>
      expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders h2 with views', () => {
      const wrapper = shallow(<PhotoDetail />);
      const welcome = <h2>views: 12312</h2>
      expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders h2 with imageSize', () => {
      const wrapper = shallow(<PhotoDetail />);
      const welcome = <h2>size: 12343434</h2>
      expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders h2 with Tags', () => {
      const wrapper = shallow(<PhotoDetail />);
      const welcome = <h2>tags: tags</h2>
      expect(wrapper.contains(welcome)).toEqual(true);
    });

})
