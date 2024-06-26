import { useState } from "react";

const Testimonial = ()=> {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto h-12"
          src="https://vectorseek.com/wp-content/uploads/2023/08/The-Store-Logo-Vector.svg-.png"
          alt=""
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem esse cum vero nobis sequi aut eius aliquid corporis! Assumenda, porro eveniet impedit delectus animi voluptatem iusto, aliquid dolore quibusdam accusantium qui laboriosam ipsa quaerat totam dignissimos non ipsam unde. Ex molestiae esse ad velit alias eveniet at nobis debitis quibusdam!”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zX38KaJpj7a6_ZH9NNuBLEOxIEqNbbEQ1moFx3li7Q&s"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                Leslie Alexander
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of The Store</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
export default Testimonial;
