import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Snapcode from '../index';

describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<Snapcode username='Test' />);
        expect(wrapper.props().username).to.equal('Test');
        wrapper.setProps({ username: 'foo' });
        expect(wrapper.props().username).to.equal('foo');
    });

    it('calls componentWillMount', () => {
        sinon.spy(Snapcode.prototype, 'componentWillMount');
        const wrapper = mount(<Snapcode />);
        expect(Snapcode.prototype.componentWillMount.calledOnce).to.be.true;
        Snapcode.prototype.componentWillMount.restore();
    });

});

describe('Static Rendered Markup', () => {

    it('renders Snapcode', () => {
        const wrapper = render(<Snapcode />);
        expect(wrapper.find('svg').length).to.equal(1);
    });

    it('check render svg paths', () => {
        const wrapper = render(<Snapcode />);
        expect(wrapper.find('path').length).to.equal(3);
    });

    it('check render svg size', () => {
        const size = 1000;
        const wrapper = render(
          <Snapcode
            username="Test"
            width={size}
            height={size}
           />
        );
        expect(wrapper.find('svg')[0].attribs.width).to.equal(size.toString());
        expect(wrapper.find('svg')[0].attribs.height).to.equal(size.toString());
    });

    it('check render svg colors', () => {
        const color = {
          dots:'#FF0000',
          background:'#0000FF',
          ghost:'#008000'
        };
        const wrapper = render(
          <Snapcode
            username="Test"
            dotsColor={color.dots}
            backgroundColor={color.background}
            ghostColor={color.ghost}
           />
        );
        Object.keys(color).map( (elem, index) => {
          expect(wrapper.find('path')[index].attribs.fill).to.equal(color[elem]);
        });
    });
});
