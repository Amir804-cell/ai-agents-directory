import { Search, Filter } from 'lucide-react';
import { FilterState } from '../types';
import './Filters.css';

interface FiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    categories: string[];
}

export function Filters({ filters, onFilterChange, categories }: FiltersProps) {
    return (
        <div className="filters-container">
            <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Search AI agents..."
                    value={filters.search}
                    onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
                    className="search-input"
                />
            </div>

            <div className="filter-group">
                <Filter size={18} className="filter-icon" />

                <select
                    value={filters.category}
                    onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
                    className="filter-select"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select
                    value={filters.pricing}
                    onChange={(e) => onFilterChange({ ...filters, pricing: e.target.value })}
                    className="filter-select"
                >
                    <option value="">All Pricing</option>
                    <option value="Free">Free</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Paid">Paid</option>
                </select>
            </div>
        </div>
    );
}
