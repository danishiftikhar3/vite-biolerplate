import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello-world')({
    component: () => <div>Hello /hello-world!</div>,
})

// just a test file too test weather api is down or front end.
