"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import RegionModal from './RegionModal';

export default function Header({ headerStyle, onNavigate }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isRegionOpen, setIsRegionOpen] = useState(false);
    const { cartCount } = useCart();

    // Style class logic
    let headerClass = "main-header";
    if (headerStyle === "hidden") {
        headerClass += " hidden";
    } else if (headerStyle === "footer-only-icons") {
        headerClass += " header-light header-icons-only";
    } else if (headerStyle === "dark") {
        headerClass += " header-dark";
    } else {
        headerClass += " header-light";
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLocalLinkClick = (e, targetIndex) => {
        e.preventDefault();
        setIsMenuOpen(false);
        if (onNavigate) {
            onNavigate(targetIndex);
        }
    };

    const isCollectionPage = pathname === '/collection' || pathname.startsWith('/collection/');
    const isDesignLogPage = pathname === '/design-log' || pathname.startsWith('/design-log/');
    const isAboutPage = pathname === '/about' || pathname.startsWith('/about/');
    const isLegacyPage = pathname === '/1976';
    const isBagPage = pathname === '/bag';
    const isCheckoutPage = pathname === '/checkout';
    const isSubPage = pathname !== '/';

    return (
        <>
            <header className={headerClass} id="main-header">
                <div className="header-container">
                    {isSubPage ? (
                        <Link href="/" className="logo" aria-label="PINTAARA Home">
                            <img src="/images/logo-wordmark.png" alt="PINTAARA" className="header-logo-img" />
                        </Link>
                    ) : (
                        <a href="#slide-2" className="logo" aria-label="PINTAARA Home" onClick={(e) => handleLocalLinkClick(e, 0)}>
                            <img src="/images/logo-wordmark.png" alt="PINTAARA" className="header-logo-img" />
                        </a>
                    )}
                    
                    <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
                        {/* Keep COLLECTION underlined if we are on collection page or product detail page */}
                        {(pathname === '/collection' || pathname.startsWith('/collection/')) ? (
                            <>
                                <Link href="/collection" className="nav-link active-underlined">COLLECTION</Link>
                                <Link href="/design-log" className="nav-link">DESIGN LOG</Link>
                                <Link href="/about" className="nav-link">ABOUT</Link>
                                <Link href="/1976" className="nav-link">1976</Link>
                            </>
                        ) : isDesignLogPage ? (
                            <>
                                <Link href="/collection" className="nav-link">COLLECTION</Link>
                                <Link href="/design-log" className="nav-link active-underlined">DESIGN LOG</Link>
                                <Link href="/about" className="nav-link">ABOUT</Link>
                                <Link href="/1976" className="nav-link">1976</Link>
                            </>
                        ) : isAboutPage ? (
                            <>
                                <Link href="/collection" className="nav-link">COLLECTION</Link>
                                <Link href="/design-log" className="nav-link">DESIGN LOG</Link>
                                <Link href="/about" className="nav-link active-underlined">ABOUT</Link>
                                <Link href="/1976" className="nav-link">1976</Link>
                            </>
                        ) : isLegacyPage ? (
                            <>
                                <Link href="/collection" className="nav-link">COLLECTION</Link>
                                <Link href="/design-log" className="nav-link">DESIGN LOG</Link>
                                <Link href="/about" className="nav-link">ABOUT</Link>
                                <Link href="/1976" className="nav-link active-underlined">1976</Link>
                            </>
                        ) : (
                            <>
                                <Link href="/collection" className="nav-link">COLLECTION</Link>
                                <Link href="/design-log" className="nav-link">DESIGN LOG</Link>
                                <Link href="/about" className="nav-link">ABOUT</Link>
                                <Link href="/1976" className="nav-link">1976</Link>
                            </>
                        )}
                    </nav>

                    <div className="header-icons">
                        <button
                            type="button"
                            className="icon-link globe-icon-btn"
                            aria-label="Select Region and Language"
                            onClick={() => setIsRegionOpen(true)}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </button>
                        <Link href="/account" className="icon-link" aria-label="Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </Link>
                        <Link href="/bag" className="icon-link cart-icon-wrapper" aria-label="Shopping Cart">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </Link>
                    </div>

                    <button 
                        className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} 
                        aria-label="Toggle Menu" 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Tesla-style Global Region & Language Selection Modal */}
            <RegionModal isOpen={isRegionOpen} onClose={() => setIsRegionOpen(false)} />
        </>
    );
}
