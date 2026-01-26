'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FloatingCurrencyButton() {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    const currencies = [
        { code: 'USD', symbol: '$', name: 'US Dollar' },
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'GBP', symbol: '£', name: 'British Pound' },
        { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
        { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
        { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    ];

    return (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
            <div className="relative">
                <button
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    className="flex flex-col items-center gap-2 px-3 py-3 text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors border bg-background shadow-lg"
                >
                    <span className="text-lg">{currencies.find(c => c.code === selectedCurrency)?.symbol}</span>
                    <span className="text-xs font-semibold">{selectedCurrency}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCurrencyOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsCurrencyOpen(false)}
                        />
                        <div className="absolute left-full ml-2 top-0 w-56 bg-background border rounded-lg shadow-xl z-20 overflow-hidden">
                            <div className="p-2 border-b bg-muted/50">
                                <p className="text-xs font-medium text-muted-foreground px-2">Select Currency</p>
                            </div>
                            <div className="py-1 max-h-[400px] overflow-y-auto">
                                {currencies.map((currency) => (
                                    <button
                                        key={currency.code}
                                        onClick={() => {
                                            setSelectedCurrency(currency.code);
                                            setIsCurrencyOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-center justify-between ${selectedCurrency === currency.code ? 'bg-muted' : ''
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="text-lg font-semibold w-6">{currency.symbol}</span>
                                            <span className="font-medium">{currency.code}</span>
                                        </span>
                                        <span className="text-muted-foreground text-xs">{currency.name}</span>
                                        {selectedCurrency === currency.code && (
                                            <div className="w-2 h-2 rounded-full bg-green-500 ml-2" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
