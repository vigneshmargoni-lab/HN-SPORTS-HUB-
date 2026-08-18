import React from 'react';
import { X, Phone, MessageSquare, Navigation, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  itemName,
}) => {
  if (!isOpen) return null;

  const encodedItem = encodeURIComponent(itemName || 'sports gear');
  const customWhatsAppUrl = `https://wa.me/918074121484?text=Hi%20HN%20Sports%20Hub%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodedItem}%20availability%20at%20your%20Bhupalpally%20store.`;

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="enquiry-modal-content"
        className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div>
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Store In-Store Enquiry
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mt-0.5">
              {itemName || 'Sports Equipment'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="py-4 space-y-3">
          <p className="text-sm text-zinc-300 leading-relaxed">
            Connect directly with <strong className="text-white">HN SPORTS HUB</strong> in Bhupalpally to ask about sizes, specifications, tournament trophy orders, or store availability.
          </p>

          <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-200 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Manjoor Nagar, Bhupalpally, Telangana</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant response via phone or WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          {/* Direct Call */}
          <a
            id="modal-call-btn"
            href={BUSINESS_INFO.phoneHref}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-red-950 transition-all"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Store: 8074121484</span>
          </a>

          {/* WhatsApp Enquiry */}
          <a
            id="modal-whatsapp-btn"
            href={customWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Get Directions */}
          <a
            id="modal-directions-btn"
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-red-400" />
            <span>Get Directions (Google Maps)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
