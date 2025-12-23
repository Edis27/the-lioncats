"use client";

import React, { useState } from 'react';

export default function LandingPage() {
  const [mintedLioncat, setMintedLioncat] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const frogImages = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
    '/8.png',
  ];

  const duplicatedImages = [...frogImages, ...frogImages];

  const generateRandomLioncat = () => {
    setIsGenerating(true);

    setTimeout(() => {
      // 1. Generate a number from 0 to 100.00
      const chance = Math.random() * 100;
      let randomNum: number;

      // 2. Assign the range based on your exact probabilities
      // We check from rarest to common for better precision

      if (chance < 0.08) {
        // LEGENDARY: 0.08% chance (304-314)
        randomNum = Math.floor(Math.random() * (314 - 304 + 1)) + 304;
      } else if (chance < 0.08 + 2.79) {
        // MYTHIC: 2.79% chance (250-303)
        randomNum = Math.floor(Math.random() * (303 - 250 + 1)) + 250;
      } else if (chance < 0.08 + 2.79 + 11.52) {
        // EPIC: 11.52% chance (200-249)
        randomNum = Math.floor(Math.random() * (249 - 200 + 1)) + 200;
      } else if (chance < 0.08 + 2.79 + 11.52 + 18.26) {
        // ULTRA RARE: 18.26% chance (150-199)
        randomNum = Math.floor(Math.random() * (199 - 150 + 1)) + 150;
      } else if (chance < 0.08 + 2.79 + 11.52 + 18.26 + 21.08) {
        // RARE: 21.08% chance (100-149)
        randomNum = Math.floor(Math.random() * (149 - 100 + 1)) + 100;
      } else if (chance < 0.08 + 2.79 + 11.52 + 18.26 + 21.08 + 22.70) {
        // UNCOMMON: 22.70% chance (50-99)
        randomNum = Math.floor(Math.random() * (99 - 50 + 1)) + 50;
      } else {
        // COMMON: The remaining ~23.57% (1-49)
        randomNum = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
      }

      setMintedLioncat(randomNum);
      setIsGenerating(false);
    }, 1000);
  };

  const getRarityLabel = (num: number) => {
    if (num >= 290) return "LEGENDARY";
    if (num >= 250) return "MYTHIC";
    if (num >= 200) return "EPIC";
    if (num >= 150) return "ULTRA RARE";
    if (num >= 100) return "RARE";
    if (num >= 50) return "Uncommon";
    return "COMMON";
  };

  const getRarityColor = (num: number) => {
    if (num >= 290) return "text-yellow-400";
    if (num >= 250) return "text-red-400";
    if (num >= 200) return "text-purple-400";
    if (num >= 150) return "text-blue-600";
    if (num >= 100) return "text-blue-400";
    if (num >= 50) return "text-green-400";
    return "text-gray-400";
  };

  return (
    <main
      className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 text-white"
      style={{
        backgroundImage: 'url(/landing-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Social Links - Top Right - Mobile Responsive */}
      <div className="absolute top-4 right-4 z-20 flex gap-2 md:gap-4">
        <a
          href="https://x.com/TheLioncats_"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-green-500 hover:border-green-400 transition-all hover:scale-110"
          style={{ boxShadow: '0 0 20px rgba(106, 188, 58, 0.5)' }}
        >
          <img
            src="/Twitter.png"
            alt="X/Twitter"
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://pump.fun/coin/3tkvwZGw65vFH2e4re5Dcfq4YbFKeCSq9krXTk47pump"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-green-500 hover:border-green-400 transition-all hover:scale-110"
          style={{ boxShadow: '0 0 20px rgba(106, 188, 58, 0.5)' }}
        >
          <img
            src="/Pumpfun.png"
            alt="Pump.fun"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* Content Container - Mobile Responsive */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-8 md:gap-12 mt-20 md:mt-0">
        {/* Title - Mobile Responsive */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center pixel-3d px-4"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          The Lioncats
        </h1>

        {/* Generated Lioncat Display (appears when generated) */}
        {mintedLioncat && (
          <div className="w-full max-w-sm flex flex-col items-center gap-4 animate-fadeIn">
            <div
              className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-800 rounded-lg border-4 border-green-500 overflow-hidden"
              style={{ boxShadow: '0 0 30px rgba(106, 188, 58, 0.7)' }}
            >
              <img
                src={`/lioncats/${mintedLioncat}.png`}
                alt={`Lioncat ${mintedLioncat}`}
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="text-center space-y-2">
              <p
                style={{ fontFamily: "'Press Start 2P', cursive" }}
                className={`text-lg sm:text-xl ${getRarityColor(mintedLioncat)}`}
              >
                {getRarityLabel(mintedLioncat)}
              </p>
            </div>
          </div>
        )}

        {/* Button appears here AFTER first generation - ABOVE gallery */}
        {mintedLioncat && (
          <button
            onClick={generateRandomLioncat}
            disabled={isGenerating}
            className="pixel-button text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              padding: '15px 30px',
              minWidth: '200px',
              maxWidth: '90%',
            }}
          >
            {isGenerating ? 'Generating...' : 'Generate Again'}
          </button>
        )}

        {/* Scrolling Frog Gallery - Mobile Responsive - Only shows BEFORE first generation */}
        {!mintedLioncat && (
          <div className="w-full overflow-hidden py-4 md:py-8">
            <div className="relative">
              <div
                className="flex gap-3 md:gap-6 animate-scroll"
                style={{
                  width: 'fit-content',
                }}
              >
                {duplicatedImages.map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-800 rounded-lg border-4 border-gray-800 overflow-hidden"
                    style={{ boxShadow: '0 0 20px rgba(106, 188, 58, 0.5)' }}
                  >
                    <img
                      src={img}
                      alt={`Frog ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Button appears here INITIALLY - BELOW gallery */}
        {!mintedLioncat && (
          <button
            onClick={generateRandomLioncat}
            disabled={isGenerating}
            className="pixel-button text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              padding: '15px 30px',
              minWidth: '200px',
              maxWidth: '90%',
            }}
          >
            {isGenerating ? 'Generating...' : 'Get ur Lioncat'}
          </button>
        )}
      </div>

      {/* Copyright Statement - Bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
        <p
          className="text-[8px] sm:text-[10px] md:text-xs text-gray-300"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          © 2025 The Lioncats. ALL RIGHTS RESERVED.
        </p>
      </div>
    </main>
  );
}