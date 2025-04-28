export default function Footer() {
  return (
    <section className="w-full min-h-[200px]">
      <div className="mx-56 flex flex-col">
        <div className="w-full h-0.5 bg-destructive border border-destructive rounded-r-lg rounded-b-lg"></div>
        <div className="py-10 text-end">
          <p className="text-sm text-muted">
            &copy; Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
