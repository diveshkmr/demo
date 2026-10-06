import { createFileRoute } from "@tanstack/react-router";
import { EnviroHome } from "@/components/enviro-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enviro Care | Cleaning & Technical Services Dubai" },
      {
        name: "description",
        content:
          "Enviro Care provides professional grease trap, water tank, kitchen hood, drainage and technical cleaning services in Dubai, U.A.E.",
      },
      { property: "og:title", content: "Enviro Care | Cleaning & Technical Services Dubai" },
      {
        property: "og:description",
        content: "Reliable cleaning and technical services for businesses across Dubai, U.A.E.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <EnviroHome />;
}
