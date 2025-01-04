import React from 'react';
import { motion } from 'framer-motion';
import { BrowserMockup } from './mockups/BrowserMockup';
import { BudgetMockup } from './mockups/BudgetMockup';
import { ChecklistMockup } from './mockups/ChecklistMockup';
import { CollaborationMockup } from './mockups/CollaborationMockup';
import { RecommendationsMockup } from './mockups/RecommendationsMockup';
import { ImportMockup } from './mockups/ImportMockup';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const MockupContent = ({ type, content }) => {
  switch (type) {
    case 'browser':
      return <BrowserMockup content={content} />;
    case 'interface':
      return <BudgetMockup content={content} />;
    case 'checklist':
      return <ChecklistMockup content={content} />;
    case 'collaboration':
      return <CollaborationMockup content={content} />;
    case 'recommendations':
      return <RecommendationsMockup content={content} />;
    case 'import':
      return <ImportMockup content={content} />;
    default:
      return null;
  }
};

export const FeatureCard = ({ feature }) => {
  return (
    <motion.div variants={item}>
      <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <MockupContent 
            type={feature.mockupContent.type} 
            content={feature.mockupContent.content} 
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
}; 