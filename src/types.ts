export type PricingType = 'Free' | 'Paid' | 'Freemium';

export interface Agent {
    id: string;
    name: string;
    description: string;
    capabilities: string[];
    pricing: PricingType;
    url: string;
    category: string;
    logo?: string;
    featured?: boolean;
}

export interface FilterState {
    search: string;
    category: string;
    pricing: string;
}
