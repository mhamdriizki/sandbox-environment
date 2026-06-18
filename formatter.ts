// Menggunakan parameter destructuring dan default export
export default function formatUser({ name, email, company: { name: companyName } }: any) {
  return `
    👤 ${name} 
    ✉️ ${email}
    🏢 ${companyName}`;
}
