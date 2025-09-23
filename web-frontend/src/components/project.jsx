function Project({ name, desc, languages, imgUrl, gitRepoLink }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-8">
      <h2 className="text-center text-2xl font-bold text-blue-600 mt-2 mb-4">{name}</h2>

      {imgUrl && (
        <img
          src={`/${imgUrl}`}
          alt={name}
          className="mx-auto mb-2"
        />
      )}

      <div className="p-6">
        <p className="text-gray-700">{desc}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            {languages.filter(Boolean).join(" • ")}
          </span>

          {gitRepoLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={gitRepoLink}
              className="text-blue-600 hover:underline"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;