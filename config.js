// Infinch – fill these 4 values once (Supabase > Project Settings > API)
window.INFINCH = {
  SUPABASE_URL: "https://ylmfvqajtfhuxfchcsio.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_Owby6_ooMPpiWgjec2dIGg_Nx5Srsrt",
  WHATSAPP_NUMBER: "919910325203",          // enquiries from website land here
  PHOTO_BUCKET: "ro-photos"
};
window.sb = window.supabase.createClient(INFINCH.SUPABASE_URL, INFINCH.SUPABASE_ANON_KEY);
window.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
window.inr = n => (n == null || n === "") ? "" : "₹" + Number(n).toLocaleString("en-IN", {maximumFractionDigits: 0});
window.photoUrl = p => sb.storage.from(INFINCH.PHOTO_BUCKET).getPublicUrl(p).data.publicUrl;
