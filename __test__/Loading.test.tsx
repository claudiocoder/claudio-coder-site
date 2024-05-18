import { expect, test } from 'vitest'
import { render, screen } from "@testing-library/react"
import Loading from '../src/app/loading'

test('Loading', () => {
  render(<Loading />)
  expect(screen.getByText('Loading...')).toBeTruthy()
})