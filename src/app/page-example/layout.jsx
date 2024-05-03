
export const metadata = {
  title: "Example Page",
  description: "Shared Layout",
};

export default function ExampleLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}

      </section>
    )
  }
