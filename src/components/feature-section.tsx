import React from 'react';
import { Icon } from '@iconify/react';

interface FeatureItemProps {
    iconName: string,
    title: string,
    description: string
}

const FeatureItem: React.FC<FeatureItemProps> = (props) => {
    const { iconName, title, description } = props;
    return (
        <div className="flex gap-4 items-start">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                <Icon icon={iconName} width="20" height="20" />
            </span>
            <div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="mt-1 text-gray-500">{description}</p>
            </div>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-5 mt-16">
            <div className="text-center">
                <h2 className="font-semibold text-3xl">Quality that Sets Us Apart</h2>
                <p className="max-w-md mx-auto mt-2 text-gray-500">Discover an unparalleled commitment to excellence in every facet of our store experience.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                <FeatureItem
                    iconName="fa-solid:tshirt"
                    title="Product Variety"
                    description="At Clothes Clove, we offer a wide range of products that cater to different styles and needs, from casual wear to formal fashion."
                />
                <FeatureItem
                    iconName="icon-park-solid:folder-quality"
                    title="Premium Quality"
                    description=" Our commitment to quality is unwavering. We use only the finest materials and manufacturing techniques to ensure each piece is durable and comfortable."
                />
                <FeatureItem
                    iconName="bi:lightbulb-fill"
                    title="Exclusive Design"
                    description="Our collections are carefully crafted by a talented team of designers, resulting in unique pieces you won't find anywhere else."
                />
                <FeatureItem
                    iconName="emojione:seedling"
                    title="Environmental Sustainability "
                    description="At Clothes Clove, we're committed to sustainable practices. Our production processes minimize environmental impact, utilizing recycled materials and eco-friendly techniques."
                />
                <FeatureItem
                    iconName="bx:bxs-smile"
                    title="Exceptional Customer Service"
                    description="We prioritize customer satisfaction above all else. Our dedicated team is always available to assist you with any questions or issues that may arise."
                />
                <FeatureItem
                    iconName="ic:round-monetization-on"
                    title="Competitive Pricing"
                    description="We offer high-quality products at competitive prices. At Clothes Clove, you can get the best value for your money."
                />
            </div>
        </div>
    );
};

export default FeaturesSection;
