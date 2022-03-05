import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'jest-mock'
// import { mocked } from 'jest-mock'
import { signIn } from 'next-auth/react'
import { push } from 'next/router'
import { SubscribeButton } from '.'

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return {
        data: null,
        status: 'unauthenticated'
      }
    },
    signIn: jest.fn()
  }
})

jest.mock('next/router', () => {
  return {
    push: jest.fn(),
  }
});

describe('SubscribeButton component', () => {

  it('renders correctly', () => {

    render(
      <SubscribeButton />
    )

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
    const pushMocked = mocked(push)

    render (<SubscribeButton />)
  })
})