import { ExternalLink, Star } from 'lucide-react';
import { Agent } from '../types';
import './AgentCard.css';

interface AgentCardProps {
    agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
    const getPricingColor = (pricing: string) => {
        switch (pricing) {
            case 'Free':
                return 'pricing-free';
            case 'Paid':
                return 'pricing-paid';
            case 'Freemium':
                return 'pricing-freemium';
            default:
                return '';
        }
    };

    return (
        <div className={`agent-card ${agent.featured ? 'featured' : ''}`}>
            {agent.featured && (
                <div className="featured-badge">
                    <Star size={14} fill="currentColor" />
                    Featured
                </div>
            )}

            <div className="card-header">
                <h3 className="agent-name">{agent.name}</h3>
                <span className={`pricing-badge ${getPricingColor(agent.pricing)}`}>
                    {agent.pricing}
                </span>
            </div>

            <p className="agent-description">{agent.description}</p>

            <div className="agent-category">
                <span className="category-label">Category:</span>
                <span className="category-value">{agent.category}</span>
            </div>

            <div className="capabilities-container">
                <div className="capabilities-label">Capabilities:</div>
                <div className="capabilities-list">
                    {agent.capabilities.map((capability, index) => (
                        <span key={index} className="capability-tag">
                            {capability}
                        </span>
                    ))}
                </div>
            </div>

            <a
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
            >
                Visit Website
                <ExternalLink size={16} />
            </a>
        </div>
    );
}
