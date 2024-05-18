import { expect, test } from 'vitest'
import { render, screen } from "@testing-library/react"
import Footer from '../src/components/Footer'

test('Footer', () => {
  render(<Footer />)
  expect(screen.getByText('Regresar')).toBeTruthy()
}) 