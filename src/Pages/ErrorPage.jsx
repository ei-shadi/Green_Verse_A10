import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { GiPlantRoots } from "react-icons/gi";
import gsap from "gsap";
import logo from "../assets/logo.png";
import Button from "../Utilities/Button";
import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
  const containerRef = useRef(null);
  const four1Ref = useRef(null);
  const zeroRef = useRef(null);
  const four2Ref = useRef(null);
  const wordPageRef = useRef(null);
  const wordNotRef = useRef(null);
  const wordFoundRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Timeline for bounce animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    const bounce = (ref) =>
      tl.to(ref, { y: -15, duration: 0.4, ease: "power2.out" }).to(ref, {
        y: 0,
        duration: 0.4,
        ease: "power2.in",
      });

    bounce(four1Ref.current);
    bounce(zeroRef.current);
    bounce(four2Ref.current);
    bounce(wordPageRef.current);
    bounce(wordNotRef.current);
    bounce(wordFoundRef.current);
  }, []);

  return (
    <>
    <Helmet title="404 NOT FOUND - Green_Verse" />
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-[#a3b18a] to-[#3a5a40] flex flex-col items-center justify-center text-white p-6 text-center"
    >
      <img src={logo} alt="" />

      <h1 className="text-5xl font-bold mb-4 flex flex-wrap justify-center gap-2 items-end">
        <span ref={four1Ref}>4</span>
        <span ref={zeroRef}>0</span>
        <span ref={four2Ref}>4</span>
        <span className="ml-4 flex gap-2 text-2xl">
          <span ref={wordPageRef}>Page</span>
          <span ref={wordNotRef}>Not</span>
          <span ref={wordFoundRef}>Found</span>
        </span>
      </h1>

      <p className="text-lg mb-6 max-w-xl">
        Looks like this garden patch doesn’t exist. Maybe the page has been pruned or never planted!
      </p>

      <Link
        to="/"
      >
        <Button label="Go Home" />
      </Link>
    </div>
    </>
  );
};

export default ErrorPage;
