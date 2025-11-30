export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Main Page</h1>
      <p>This is the main dashboard content area.</p>
      <div className="mt-4 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
        <p className="font-bold">📱 MOBILE VIEW:</p>
        <p>You should see:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Blue area on TOP (sidebar)</li>
          <li>Green area below (main content)</li>
          <li>This yellow box in the green area</li>
        </ul>
      </div>
    </div>
  );
}
