import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Section F: Sharing the Invitation via WhatsApp & Link Copying
 * 
 * Features:
 * - Direct WhatsApp share button with pre-filled invitation text
 * - One-tap link copy with modern Clipboard API & fallback
 * - Toast notification for successful copy feedback
 */
export const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Get active URL (uses configured publicWebsiteUrl if set, otherwise window.location.href)
  const getShareableUrl = () => {
    if (weddingConfig.share.publicWebsiteUrl && weddingConfig.share.publicWebsiteUrl.trim() !== '') {
      return weddingConfig.share.publicWebsiteUrl.trim();
    }
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return 'https://your-wedding-invitation.vercel.app';
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
      setToastMessage('Invitation link copied! Ready to share.');
      setTimeout(() => {
        setCopied(false);
        setToastMessage('');
      }, 3500);
    } catch {
      setToastMessage('Could not copy link automatically. Please copy the URL from your browser.');
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  return (
    <section 
      id="share" 
      aria-label="Share Wedding Invitation"
      className="relative px-4 py-8 sm:py-12 max-w-xl mx-auto text-center"
    >
      <div className="bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 border border-[#B08D57]/30 shadow-md">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center mb-3">
          <Share2 className="w-6 h-6 text-[#128C7E]" />
        </div>

        <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#6D1F2A] mb-2">
          Share This Invitation
        </h4>

        <p className="text-xs sm:text-sm font-sans text-[#6B5B52] mb-6 max-w-md mx-auto">
          Send our wedding card directly to your family and friends on WhatsApp or copy the link to share.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* WhatsApp Share Button */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            aria-label="Share wedding invitation on WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:scale-95 text-white font-sans font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy invitation link to clipboard"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3 rounded-full bg-[#FFFDF8] hover:bg-[#F8F1E3] active:scale-95 text-[#6D1F2A] border border-[#B08D57] font-sans font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#B08D57]" />
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
            className="mt-4 inline-flex items-center space-x-2 bg-[#263D30] text-[#FFFDF8] px-4 py-2 rounded-lg text-xs font-sans shadow-lg animate-fade-in"
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShareSection;
