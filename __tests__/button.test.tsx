import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders label', () => {
    render(<Button>Launch</Button>)
    expect(screen.getByRole('button', { name: 'Launch' })).toBeInTheDocument()
  })

  it('shows loading text', () => {
    render(<Button isLoading>Launch</Button>)
    expect(screen.getByRole('button', { name: 'Please wait...' })).toBeDisabled()
  })
})
