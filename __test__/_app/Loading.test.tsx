import { expect, it, describe } from 'vitest'
import { render } from '@testing-library/react'
import Loading from '../../src/app/loading'

describe('Loading', () => {
  it('should render', () => {
    const component = render(<Loading />)
    expect(component).toBeDefined()
  })
  it('should display loading label', () => {
    const { container } = render(<Loading />)
    expect(container.getElementsByClassName('loader').length).toBe(1)
  })
})
