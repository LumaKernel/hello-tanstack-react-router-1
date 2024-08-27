import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/%72oute")({
  component: RoutePage,
});

function RoutePage() {
  return <div className="p-2">Hello I'm "route"!</div>;
}
