/** Public contact channels for AI Training Indonesia (aitraining.id). */

export const CONTACT_EMAIL = "hi@aitraining.id";
export const WHATSAPP_E164 = "6281807011103";
export const WHATSAPP_DISPLAY = "+6281807011103";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164}`;

const TRAINING_SUBJECT = "Inquiry: Corporate AI Training — AI Training Indonesia";
const TRAINING_BODY = `Halo AI Training Indonesia,

Saya ingin mendiskusikan pelatihan AI untuk tim kami.

Perusahaan / organisasi:
Industri:
Jumlah peserta (estimasi):
Program yang diminati (Automation / Development / Strategy / GEO / Claude / HeyGen / OpenClaw / lainnya):
Durasi (half-day / full-day / multi-day):
Lokasi (kota atau virtual):
Target timeline:
Tujuan utama setelah training:

Terima kasih.`;

const SPEAKING_SUBJECT = "Undangan Pembicara AI — AI Training Indonesia";
const SPEAKING_BODY = `Halo AI Training Indonesia,

Saya ingin mengundang Aurelius Ivan Wijaya sebagai pembicara AI.

Nama acara:
Penyelenggara:
Tanggal & waktu:
Lokasi / format (onsite / hybrid / virtual):
Format sesi (keynote / panel / workshop):
Estimasi jumlah peserta:
Topik yang diinginkan:
Kontak penanggung jawab:

Terima kasih.`;

function mailto(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Mailto with a fill-in template for corporate training inquiries. */
export function mailtoTrainingInquiry(): string {
  return mailto(TRAINING_SUBJECT, TRAINING_BODY);
}

/** Mailto with a fill-in template for speaking / keynote invitations. */
export function mailtoSpeakingInquiry(): string {
  return mailto(SPEAKING_SUBJECT, SPEAKING_BODY);
}
