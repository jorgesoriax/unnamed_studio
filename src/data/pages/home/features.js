import { BoltIcon } from "@heroicons/react/24/solid";

const dataFeatures = {
  header: {
    title: "Creamos diseños a la medida",
    description:
      "Ahorra tiempo, nosotros nos encargamos de darte el diseño que necesitas.",
  },
  features: [
    {
      title: "Garantía de satisfacción",
      description:
        "Si tu diseño no cumple con tus necesidades, puedes solicitar un reembolso del 100%.",
      image: "./static/images/features/warranty.png",
      icon: <BoltIcon width="24px" height="24px" />,
    },
    {
      title: "Diseño con propósito",
      description:
        "Trabajamos colaborativamente con IA para garantizarte diseños rápidos y de calidad.",
      image: "./static/images/features/quality.png",
      icon: <BoltIcon width="24px" height="24px" />,
    },
    {
      title: "Entrega en menos de 72hrs",
      description:
        "Usamos diferentes herramientas de IA para optimizar nuestros tiempos de entrega.",
      image: "./static/images/features/delivery.png",
      icon: <BoltIcon width="24px" height="24px" />,
    },
    {
      title: "Revisiones ilimitadas",
      description:
        "Creamos junto a ti para asegurarnos de que el resultado final cumpla con tus expectativas.",
      image: "./static/images/features/reviews.png",
      icon: <BoltIcon width="24px" height="24px" />,
    },
  ],
};

export default dataFeatures;
