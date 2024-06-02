import { expect, it, describe } from 'vitest'
import { render, screen } from "@testing-library/react"
import Loading from '../../src/app/loading'

describe('Loading', () => {
  it('should render', () => {
    const component = render(<Loading />)
    expect(component).toBeDefined()
  })
  it('should display loading label', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeTruthy()
  })
})