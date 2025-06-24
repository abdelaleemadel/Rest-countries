"use client";

import Link from "next/link";

function Error({ error, reset }) {
  return (
    <div className="my-32 text-center dark:bg-very-dark dark:text-white">
      <h3 className="text-6xl sm:text-8xl font-extrabold">Error 404</h3>
      <p className="text-2xl sm:text-4xl font-bold my-16">
        {error
          ? error?.message
          : "Something bad happened, please try again later"}
      </p>
      {reset ? (
        <button
          type="button"
          className="border py-3 px-5 text-xl lg:text-2xl rounded"
          onClick={reset}
        >
          Try Again
        </button>
      ) : (
        <Link href="/" className="border py-3 px-5 text-xl lg:text-2xl rounded">
          Try Again
        </Link>
      )}
    </div>
  );
}

export default Error;
