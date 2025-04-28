export default function Footer() {
  return (
    <section className="w-full min-h-[200px]">
      <div className="w-full flex flex-col px-4">
        <div className="w-full h-0.5 bg-destructive border border-destructive rounded-r-lg rounded-b-lg"></div>
        <div className="py-6 md:py-10">
          <p className="text-xs md:text-sm text-muted text-center md:text-left">
            &copy; Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
