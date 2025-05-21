// app/layout.js
export const metadata = {
  title: "Your Name | Developer Portfolio",
  description: "Personal website inspired by tamalsen.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d0d0d] text-white font-mono">
        <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
