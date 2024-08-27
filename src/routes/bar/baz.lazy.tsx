import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bar/baz')({
  component: () => <div>Hello /bar/baz!</div>
})