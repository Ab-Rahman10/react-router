export default function User({ user }) {
  const { name, email, phone } = user;
  return (
    <div className="border p-5 rounded-md">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
