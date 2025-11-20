import { Agent } from '../types';
import { AgentCard } from './AgentCard';
import './AgentGrid.css';

interface AgentGridProps {
    agents: Agent[];
}

export function AgentGrid({ agents }: AgentGridProps) {
    if (agents.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">🤖</div>
                <h3 className="empty-title">No agents found</h3>
                <p className="empty-description">
                    Try adjusting your filters to see more results
                </p>
            </div>
        );
    }

    return (
        <div className="agent-grid">
            {agents.map((agent, index) => (
                <div
                    key={agent.id}
                    className="agent-grid-item animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <AgentCard agent={agent} />
                </div>
            ))}
        </div>
    );
}
