import React from 'react'
import List from '../src/components/List'
import { render } from 'enzyme'

const setup = () => {
    const props = {
        name: 'listtest',
        list: [
            {
                id: 1,
                title: 1,
            },
            {
                id: 2,
                title: 2,
            },
            {
                id: 3,
                title: 3,
            },
            {
                id: 4,
                title: 4,
            },
        ],
        listBtnClick: jest.fn(),
    }
    const wrapper = render(<List {...props} />)
    return {
        props,
        wrapper
    }
}

describe('List', () => {
    const { props, wrapper } = setup()
    it('List length should be 3', () => {
        expect(wrapper.find('li').length).toBe(4)
    })
})

