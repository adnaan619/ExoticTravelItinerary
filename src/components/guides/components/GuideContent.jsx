import React from 'react';
import { motion } from 'framer-motion';

export const GuideContent = ({ data, onLocationClick }) => {
    return (
        <div className="w-1/2 overflow-y-auto h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh]">
                <img
                    src="https://images.unsplash.com/photo-1590911587137-fda8edb14d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEthbmR5fGVufDB8MHwwfHx8MA%3D%3D"
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            {data.badges.map(badge => (
                                <span key={badge} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                                    {badge}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="flex items-center gap-2">
                                <img
                                    src={data.author.avatar}
                                    alt={data.author.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span>{data.author.name}</span>
                            </div>
                            <span>•</span>
                            <span>{data.author.date}</span>
                            <span>•</span>
                            <span>{data.author.views} views</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="px-8 py-6">
                {data.sections.map(section => (
                    <section key={section.id} className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                        <div className="prose prose-lg">
                            <p>{section.content}</p>

                            {section.subsections?.map(subsection => (
                                <div key={subsection.title} className="my-6">
                                    <h3 className="text-xl font-semibold mb-3">{subsection.title}</h3>
                                    <ul className="space-y-2">
                                        {subsection.items.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-blue-500">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {section.locations?.map(location => (
                                <div
                                    key={location.id}
                                    className="bg-white rounded-xl p-6 mb-4 border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer"
                                    onClick={() => onLocationClick(location)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={location.image}
                                                alt={location.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold mb-2 text-lg">{location.title}</h3>
                                            <p className="text-gray-600 mb-4 text-sm">{location.description}</p>
                                            <div className="flex gap-2">
                                                {location.tags?.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {location.details && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <div className="grid grid-cols-2 gap-4">
                                                {location.details?.map((detail, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <span className="text-gray-500">{detail.icon}</span>
                                                        <span className="text-sm">{detail.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}; 