import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Anim = () => {
  useGSAP(() => {
    gsap.to("#text", {
      y: 100, // Déplace le texte verticalement vers le bas
      scale: 0.5, // Réduit la taille du texte
      scrollTrigger: {
        trigger: "#text",
        start: "top center", // Commence l'animation lorsque le texte atteint le centre de l'écran
        end: "top top", // L'animation se termine lorsque le texte atteint le haut de l'écran
        scrub: true, // Synchronise l'animation avec le défilement
        pin: true // Fixe l'élément lorsqu'il atteint la fin de l'animation
      }
    });
  });

  return (
    <div>
      <div  className='text-white content-center text-4xl text-center bg-[#f6a3e7eb] min-h-svh font-bold w-full'>
        <div id='text'>Want To Know more about <span/> our services?</div>
      </div>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
    </div>
  )
}
