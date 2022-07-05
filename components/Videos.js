function Videos() {
  return (
    <section>
      <div className="Component flex flex-col items-center md:flex-row justify-center gap-4 my-4">
      <iframe className="w-96 aspect-video" src="https://www.youtube.com/embed/5_iwa4CBhEs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe className="w-96 aspect-video" src="https://www.youtube.com/embed/j9yamBbd-is" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>
  )
}

export default Videos;
