function Videos() {
  return (
    <section id="Component">
      <div className="flex justify-center mt-2 mb-4">
        <div className="bg-[#00aa0040] p-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 rounded-lg">
          <iframe className="max-w-full aspect-video" src="https://www.youtube.com/embed/5_iwa4CBhEs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className="max-w-full aspect-video" src="https://www.youtube.com/embed/j9yamBbd-is" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className="max-w-full aspect-video" src="https://www.youtube.com/embed/3RruGm8dt70" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}

export default Videos;
