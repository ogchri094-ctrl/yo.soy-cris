
    window.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);

      // 1) Texto con stagger (letras del título)
      gsap.from(".titulo", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "expo.out"
      });

      // 2) Descripción aparece con delay
      gsap.from(".descripcion", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
      });

      // 3) Imagen con efecto zoom + fade
      gsap.from(".imagen img", {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      });

      // 4) Animación al hacer scroll (parallax de la imagen)
      gsap.to(".imagen img", {
        y: -60,
        scrollTrigger: {
          trigger: ".seccion1",
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      });

      // 5) Efecto de rebote infinito en el botón
      gsap.to(".enlaces2 a", {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // 6) Responsivo: menos desplazamientos en móvil
      const mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        gsap.set(".imagen img", { clearProps: "all" }); // quita parallax en móvil
      });
    });

   

gsap.from(".seccion3 .div3", {
  opacity: 0,
  y: 50,               // se desplaza desde abajo
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,        // cada bloque entra 0.3s después del anterior
  scrollTrigger: {
    trigger: ".seccion3",
    start: "top 80%",  // cuando la sección llega al 80% de la pantalla
    toggleActions: "play none none reverse" // al salir se deshace
  }
});

// Selecciona todos los bloques
const bloques = document.querySelectorAll(".seccion3 .div3");

bloques.forEach(bloque => {
  // Animación al pasar el mouse
  bloque.addEventListener("mouseenter", () => {
    gsap.to(bloque, {
      y: -10,        // se levanta 10px
      scale: 1.03,   // ligeramente más grande
      duration: 0.3,
      ease: "power2.out"
    });
  });

  // Animación al quitar el mouse
  bloque.addEventListener("mouseleave", () => {
    gsap.to(bloque, {
      y: 0,          // vuelve a su posición original
      scale: 1,      // tamaño normal
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

gsap.from(".scroll-text", {
  scrollTrigger: {
    trigger: ".scroll-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  scale: 0.8,
  duration: 1,
  ease: "power3.out"
});
