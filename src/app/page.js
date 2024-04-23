import { MobileIcon } from "@/components/icons/Right";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-12">
        <SectionHeaders header={"About Us"} subHeader={"our story"} />
        <div className="mt-3 max-w-xl mx-auto text-gray-500 flex flex-col gap-3">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </section>
      <section className="text-center my-12">
        <SectionHeaders header={"Contact Us"} subHeader={"Don't hesitate"} />
        <div className="mt-5">
          <a
            href="+923157473743"
            className="text-4xl flex justify-center items-center gap-2 text-gray-500"
          >
            <MobileIcon /> +92 315 7473 743
          </a>
        </div>
      </section>
      <footer className="border-t-2 p-8 text-center mt-8">
        <span className="text-lg text-gray-500">
          Made with 💖 by{" "}
          <a
            href="https://www.linkedin.com/in/mubashar-hassan-sci/"
            target="_blank"
            className="hover:underline text-primary"
          >
            Al-Rehman
          </a>{" "}
          © {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}
