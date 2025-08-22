export default function PromoVideo({ ...props }) {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/7Mf1tcQAbGI?si=zbdLzhlEXkutoC3a"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      {...props}
    />
  );
}
