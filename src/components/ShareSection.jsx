import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Section F: Sharing the Invitation via WhatsApp & Link Copying
 * 
 * Features:
 * - Direct WhatsApp share button with pre-filled Islamic wedding invitation text
 * - One-tap link copy with Clipboard API & robust fallback
 * - Toast notification for successful copy feedback
 * - Styled in the Rose Pink, Lavender & Champagne Gold floral aesthetic
 */
export const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Get active shareable URL (uses configured publicWebsiteUrl if set, otherwise window.location.href)
  const getShareableUrl = () => {
    if (weddingConfig.share.publicWebsiteUrl && weddingConfig.share.publicWebsiteUrl.trim() !== '') {
      return weddingConfig.share.publicWebsiteUrl.trim();
    }
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return 'https://islamic-wedding-invitation.vercel.app';
  };

  // WhatsApp Share Handler
  const handleWhatsAppShare = () => {
    const url = getShareableUrl();
    const message = weddingConfig.share.getWhatsAppMessage(url);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Copy Link Handler
  const handleCopyLink = async () => {
    const url = getShareableUrl();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setToastMessage('Invitation link copied! Ready to share with family.');
      setTimeout(() => {
        setCopied(false);
        setToastMessage('');
      }, 3500);
    } catch {
      setToastMessage('Could not copy link automatically. Please copy the URL from your browser address bar.');
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  return (
    <section 
      id="share" 
      aria-label="Share Wedding Invitation"
      className="relative px-1 sm:px-4 py-6 sm:py-12 max-w-xl mx-auto text-center"
    >
      <div className="bg-[#F8EEF5] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#C6A46A]/35 shadow-md">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#EAE2F6] border border-[#D99AAF]/40 flex items-center justify-center mb-2.5 sm:mb-3">
          <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C405C]" />
        </div>

        <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#5C405C] mb-1.5 sm:mb-2">
          Share This Invitation
        </h4>

        <p className="text-xs sm:text-sm font-sans text-[#51474D] mb-5 sm:mb-6 max-w-md mx-auto">
          Share our wedding card with your family, relatives, and friends on WhatsApp or copy the link to share.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full">
          {/* WhatsApp Share Button */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            aria-label="Share wedding invitation on WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] space-x-2.5 px-5 sm:px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:scale-95 text-white font-sans font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy invitation link to clipboard"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] space-x-2.5 px-5 sm:px-6 py-3 rounded-full bg-[#F8EEF5] hover:bg-[#EAE2F6]/50 active:scale-95 text-[#5C405C] border border-[#C6A46A] font-sans font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#5C405C]" />
                <span className="text-[#5C405C]">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C6A46A]" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>
        </div>

        {/* Live Toast Confirmation */}
        {toastMessage && (
          <div 
            role="status" 
            aria-live="polite"
            className="mt-3 sm:mt-4 inline-flex items-center justify-center space-x-2 bg-[#5C405C] text-[#FFFDF8] px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-sans shadow-lg max-w-full"
          >
            <Check className="w-3.5 h-3.5 text-[#F4C6D5]" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShareSection;
