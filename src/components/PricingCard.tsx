
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingFeature {
  text: string;
  available: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
  priceDetail?: string;
  audience?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText,
  priceDetail,
  audience,
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        popular 
          ? 'border-2 border-brand-purple transform hover:-translate-y-1 hover:shadow-xl' 
          : 'border border-gray-200 hover:shadow-lg'
      }`}
    >
      {popular && (
        <div className="bg-brand-purple text-white text-center py-1.5 text-sm font-medium">
          推荐方案
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        {audience && <p className="text-sm text-gray-500 mb-4">{audience}</p>}
        
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {priceDetail && <span className="text-gray-500 ml-1">{priceDetail}</span>}
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-brand-purple hover:bg-brand-lightPurple' 
              : 'bg-white text-brand-purple border border-brand-purple hover:bg-gray-50'
          }`}
        >
          {buttonText}
        </Button>
        
        <div className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`flex-shrink-0 h-5 w-5 ${feature.available ? 'text-brand-purple' : 'text-gray-300'}`}>
                <Check size={20} className={feature.available ? 'text-brand-purple' : 'text-gray-300'} />
              </div>
              <p className={`ml-3 text-sm ${feature.available ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
