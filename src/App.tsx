import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { AgentGrid } from './components/AgentGrid';
import { agents } from './data/agents';
import { FilterState } from './types';
import './App.css';

function App() {
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        category: '',
        pricing: '',
    });

    // Get unique categories
    const categories = useMemo(() => {
        const uniqueCategories = new Set(agents.map((agent) => agent.category));
        return Array.from(uniqueCategories).sort();
    }, []);

    // Filter agents based on current filters
    const filteredAgents = useMemo(() => {
        return agents.filter((agent) => {
            const matchesSearch =
                filters.search === '' ||
                agent.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                agent.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                agent.capabilities.some((cap) =>
                    cap.toLowerCase().includes(filters.search.toLowerCase())
                );

            const matchesCategory =
                filters.category === '' || agent.category === filters.category;

            const matchesPricing =
                filters.pricing === '' || agent.pricing === filters.pricing;

            return matchesSearch && matchesCategory && matchesPricing;
        });
    }, [filters]);

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Filters
                    filters={filters}
                    onFilterChange={setFilters}
                    categories={categories}
                />
                <div className="results-count">
                    Showing {filteredAgents.length} of {agents.length} AI agents
                </div>
                <AgentGrid agents={filteredAgents} />
            </main>
            <footer className="footer">
                <p>
                    Built with ❤️ to help you discover the best AI tools
                </p>
            </footer>
        </div>
    );
}

export default App;
