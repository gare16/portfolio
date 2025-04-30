export default function Footer() {
  return (
    <section className="w-full min-h-[200px]">
      <div className="w-full flex flex-col px-5">
        <div className="w-full h-0.5 bg-destructive border border-destructive rounded-r-lg rounded-b-lg"></div>
        <div className=" md:pt-5">
          <p className="text-xs md:text-sm text-muted text-center md:text-left">
            &copy; Copyright 2025.{" "}
            <span className="text-destructive">All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
