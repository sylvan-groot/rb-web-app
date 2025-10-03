function WorkExperience({ title, company, duration, info, last }) {
    return (
        <div className="relative">
            <div className="absolute -left-[37px] md:w-6 md:h-6 rounded-full bg-blue-600 border-4 border-white"/>
            <h2 className="text-xl font-semibold text-gray-800">
                {title} <span className="text-gray-500">@ {company}</span>
            </h2>
            <p className="text-sm text-gray-500 mb-2">{duration}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
                {info}
            </p>
            {!last && (
                <div className="p-3 border-b border-gray-300 md:border-none w-1/2 mx-auto" />
            )}
        </div>
    )
}

export default WorkExperience;