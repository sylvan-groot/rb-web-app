import { useTranslation } from "react-i18next";

function WorkExperience({ title, role, company, duration, info, last, focus }) {
    const { t } = useTranslation();
    return (
        <div className="relative">
            <div className="absolute -left-[37px] md:w-6 md:h-6 rounded-full bg-blue-600 border-4 border-white" />
            <h2 className="text-xl font-semibold text-gray-800">
                {title} {role} <span className="text-gray-500">@ {company}</span>
            </h2>
            <p className="text-sm text-gray-500 mb-2">{duration}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
                {info}
            </p>
            {focus && (
                <ul className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    {focus.map((key, idx) => (
                        <li key={idx} className="px-2 py-1 bg-gray-200 rounded-lg">
                            {t(key)}
                        </li>
                    ))}
                </ul>
            )}
            {!last && (
                <div className="p-3 border-b border-gray-300 md:border-none w-1/2 mx-auto" />
            )}
        </div>
    )
}

export default WorkExperience;