import { Sparkles } from 'lucide-react';
import './Header.css';

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <Sparkles className="logo-icon" size={32} />
                    <h1 className="header-title">
                        AI Agents <span className="gradient-text">Directory</span>
                    </h1>
                </div>
                <p className="header-subtitle">
                    Discover the perfect AI assistant for your needs
                </p>
            </div>
            <div className="header-background"></div>
        </header>
    );
}
