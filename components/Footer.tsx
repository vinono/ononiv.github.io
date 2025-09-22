export default function Footer() {
  const platform = "github"
  const username = "ononiv"

  return (
    <footer className="border-t mt-auto p-4">
      <div className="container mx-auto text-center">
        <p>
          Build by{' '}
          <a
            href={`https://www.${platform}.com/${username}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform}
          </a>
          !
        </p>
      </div>
    </footer>
  )
}