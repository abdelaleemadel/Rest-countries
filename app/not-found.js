import Link from "next/link";

function NotFound() {
  return (
    <div className="my-32 text-center dark:bg-very-dark dark:text-white">
      <h3 className="text-6xl sm:text-8xl font-extrabold">Error 404</h3>
      <p className="text-2xl sm:text-4xl font-bold my-16">
        This Page Does Not Exist
      </p>
      <Link href="/" className="border py-3 px-5 text-xl lg:text-2xl rounded">
        Home Page
      </Link>
    </div>
  );
}

export default NotFound;
