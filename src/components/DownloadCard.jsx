import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText } from 'lucide-react';
import jsPDF from 'jspdf';

export default function DownloadCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [loading, setLoading] = useState(false);

  const downloadPDF = () => {
    setLoading(true);
    setTimeout(() => {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a5' });
      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();

      // Background
      doc.setFillColor(253, 246, 236);
      doc.rect(0, 0, W, H, 'F');

      // Gold border
      doc.setDrawColor(201, 168, 76);
      doc.setLineWidth(0.8);
      doc.rect(6, 6, W - 12, H - 12);
      doc.setLineWidth(0.3);
      doc.rect(9, 9, W - 18, H - 18);

      // Corner decors
      const corners = [[6,6],[W-6,6],[6,H-6],[W-6,H-6]];
      doc.setFontSize(14);
      corners.forEach(([x,y]) => {
        doc.setTextColor(201, 168, 76);
        doc.text('✦', x - 3, y + 4);
      });

      // Header
      doc.setTextColor(125, 46, 70);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.text('✦  With Great Joy  ✦', W / 2, 22, { align: 'center' });

      // Names
      doc.setFont('helvetica', 'bolditalic');
      doc.setFontSize(32);
      doc.setTextColor(61, 26, 46);
      doc.text('Tushar', W / 2, 42, { align: 'center' });
      doc.setFontSize(16);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(201, 168, 76);
      doc.text('&', W / 2, 52, { align: 'center' });
      doc.setFontSize(32);
      doc.setFont('helvetica', 'bolditalic');
      doc.setTextColor(61, 26, 46);
      doc.text('Ashwini', W / 2, 63, { align: 'center' });

      // Divider
      doc.setDrawColor(201, 168, 76);
      doc.setLineWidth(0.4);
      doc.line(W/2 - 25, 68, W/2 + 25, 68);

      // Tagline
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(90, 40, 60);
      const tagline = doc.splitTextToSize(
        'Together with their families, invite you to celebrate their wedding',
        W - 40
      );
      doc.text(tagline, W / 2, 76, { align: 'center' });

      // Events
      let y = 92;

      // Haldi
      doc.setFillColor(255, 248, 220);
      doc.roundedRect(18, y - 6, W - 36, 28, 3, 3, 'F');
      doc.setDrawColor(232, 163, 32);
      doc.setLineWidth(0.4);
      doc.roundedRect(18, y - 6, W - 36, 28, 3, 3, 'S');
      doc.setFont('helvetica', 'bolditalic');
      doc.setFontSize(14);
      doc.setTextColor(61, 26, 46);
      doc.text('🌼 Haldi Ceremony', W / 2, y + 4, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(90, 40, 60);
      doc.text('Saturday, 09 May 2026', W / 2, y + 12, { align: 'center' });
      y += 36;

      // Wedding
      doc.setFillColor(249, 235, 240);
      doc.roundedRect(18, y - 6, W - 36, 28, 3, 3, 'F');
      doc.setDrawColor(212, 128, 142);
      doc.setLineWidth(0.4);
      doc.roundedRect(18, y - 6, W - 36, 28, 3, 3, 'S');
      doc.setFont('helvetica', 'bolditalic');
      doc.setFontSize(14);
      doc.setTextColor(61, 26, 46);
      doc.text('💍 Wedding Ceremony', W / 2, y + 4, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(90, 40, 60);
      doc.text('Sunday, 10 May 2026', W / 2, y + 12, { align: 'center' });
      y += 36;

      // Venue
      doc.setDrawColor(201, 168, 76);
      doc.setLineWidth(0.3);
      doc.line(W/2 - 20, y, W/2 + 20, y);
      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(201, 168, 76);
      doc.text('📍 Venue', W / 2, y, { align: 'center' });
      y += 7;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(61, 26, 46);
      doc.text('Plot No. 169, Sai Angan Society', W / 2, y, { align: 'center' });
      y += 6;
      doc.text('Jolwa, Kadodara, Surat', W / 2, y, { align: 'center' });

      // Footer
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(150, 100, 120);
      doc.text('With Love & Blessings  ✦  Tushar & Ashwini', W / 2, H - 14, { align: 'center' });

      doc.save('Tushar_Ashwini_Wedding_Invitation.pdf');
      setLoading(false);
    }, 300);
  };

  return (
    <section className="section-pad bg-cream-gradient">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-10 relative"
          style={{
            background: 'linear-gradient(145deg, rgba(253,246,236,0.97), rgba(249,235,240,0.9))',
            border: '1px solid rgba(201,168,76,0.4)',
          }}
        >
          {/* Corners */}
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />

          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: 'linear-gradient(135deg, var(--deep), var(--deep-2))', border: '1px solid var(--gold)' }}
          >
            <FileText size={26} color="var(--gold)" />
          </div>

          <p className="font-script text-4xl mb-2" style={{ color: 'var(--burgundy)' }}>
            Download Invitation
          </p>
          <p className="font-display text-base italic mb-7" style={{ color: 'var(--deep)', opacity: 0.65 }}>
            Save a beautiful copy of our wedding invitation
          </p>

          <button
            onClick={downloadPDF}
            disabled={loading}
            className="btn-gold mx-auto"
          >
            {loading ? '⏳ Generating...' : <><Download size={15} /> Download PDF Card</>}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
